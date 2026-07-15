const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const t = require('@babel/types')

function isObjectProperty(node, name) {
  return node.type === 'ObjectProperty' && ((node.key.type === 'Identifier' && node.key.name === name) || (node.key.type === 'StringLiteral' && node.key.value === name))
}

function cloneNode(node) { return node }

function buildParagraphBlocksFromBody(bodyNode) {
  const blocks = []
  if (bodyNode.type === 'StringLiteral') {
    if (bodyNode.value !== '') {
      blocks.push(t.objectExpression([
        t.objectProperty(t.identifier('type'), t.stringLiteral('paragraph')),
        t.objectProperty(t.identifier('text'), t.stringLiteral(bodyNode.value))
      ]))
    }
  } else if (bodyNode.type === 'ArrayExpression') {
    for (const elem of bodyNode.elements) {
      if (!elem) continue
      if (elem.type === 'StringLiteral') {
        if (elem.value !== '') {
          blocks.push(t.objectExpression([
            t.objectProperty(t.identifier('type'), t.stringLiteral('paragraph')),
            t.objectProperty(t.identifier('text'), t.stringLiteral(elem.value))
          ]))
        }
      } else {
        blocks.push(t.objectExpression([
          t.objectProperty(t.identifier('type'), t.stringLiteral('paragraph')),
          t.objectProperty(t.identifier('text'), elem)
        ]))
      }
    }
  } else {
    // preserve as single paragraph
    blocks.push(t.objectExpression([
      t.objectProperty(t.identifier('type'), t.stringLiteral('paragraph')),
      t.objectProperty(t.identifier('text'), bodyNode)
    ]))
  }
  return blocks
}

function migrateFile(filePath) {
  const code = fs.readFileSync(filePath, 'utf8')
  const ast = parser.parse(code, { sourceType: 'module', plugins: ['jsx'] })
  let modified = false

  traverse(ast, {
    ExportDefaultDeclaration(pathExp) {
      const decl = pathExp.node.declaration
      if (decl && decl.type === 'Identifier') {
        // find variable declaration
        const name = decl.name
        const binding = pathExp.scope.getBinding(name)
        if (binding && binding.path.node.init && binding.path.node.init.type === 'ObjectExpression') {
          const obj = binding.path.node.init
          migrateContentObject(obj) && (modified = true)
        }
      } else if (decl && decl.type === 'ObjectExpression') {
        const obj = decl
        migrateContentObject(obj) && (modified = true)
      }
    }
  })

  if (modified) {
    const out = generate(ast, { retainLines: true }, code).code
    fs.writeFileSync(filePath, out, 'utf8')
    console.log('Migrated', filePath)
  }
}

function migrateContentObject(obj) {
  let didChange = false
  for (const prop of obj.properties) {
    if (prop.key && ((prop.key.type === 'Identifier' && prop.key.name === 'content') || (prop.key.type === 'StringLiteral' && prop.key.value === 'content'))) {
      const contentValue = prop.value
      if (contentValue.type === 'ArrayExpression') {
        const newElements = []
        for (const el of contentValue.elements) {
          if (!el || el.type !== 'ObjectExpression') { newElements.push(el); continue }
          const hasBlocks = el.properties.some(p => isObjectProperty(p, 'blocks'))
          if (hasBlocks) { newElements.push(el); continue }

          // Build blocks
          const blocks = []

          // If heading present, add heading block first
          const headingPropIndex = el.properties.findIndex(p => isObjectProperty(p, 'heading'))
          if (headingPropIndex !== -1) {
            const headingNode = el.properties[headingPropIndex].value
            blocks.push(t.objectExpression([
              t.objectProperty(t.identifier('type'), t.stringLiteral('heading')),
              t.objectProperty(t.identifier('text'), headingNode)
            ]))
          }

          // image -> image block (use src and caption if present)
          const imageIndex = el.properties.findIndex(p => isObjectProperty(p, 'image'))
          if (imageIndex !== -1) {
            const imageNode = el.properties[imageIndex].value
            const captionProp = el.properties.find(p => isObjectProperty(p, 'caption'))
            const imgObjProps = [t.objectProperty(t.identifier('type'), t.stringLiteral('image')),
              t.objectProperty(t.identifier('src'), imageNode)]
            if (captionProp) imgObjProps.push(t.objectProperty(t.identifier('caption'), captionProp.value))
            blocks.push(t.objectExpression(imgObjProps))
          }

          // body -> paragraph(s)
          const bodyIndex = el.properties.findIndex(p => isObjectProperty(p, 'body'))
          if (bodyIndex !== -1) {
            const bodyNode = el.properties[bodyIndex].value
            const paraBlocks = buildParagraphBlocksFromBody(bodyNode)
            blocks.push(...paraBlocks)
          }

          // equation
          const eqIndex = el.properties.findIndex(p => isObjectProperty(p, 'equation'))
          if (eqIndex !== -1) {
            const eqNode = el.properties[eqIndex].value
            blocks.push(t.objectExpression([
              t.objectProperty(t.identifier('type'), t.stringLiteral('equation')),
              t.objectProperty(t.identifier('equation'), eqNode)
            ]))
          }

          // explanation
          const explIndex = el.properties.findIndex(p => isObjectProperty(p, 'explanation'))
          if (explIndex !== -1) {
            const explNode = el.properties[explIndex].value
            blocks.push(t.objectExpression([
              t.objectProperty(t.identifier('type'), t.stringLiteral('explanation')),
              t.objectProperty(t.identifier('text'), explNode)
            ]))
          }

          // table
          const tableIndex = el.properties.findIndex(p => isObjectProperty(p, 'table'))
          if (tableIndex !== -1) {
            const tableNode = el.properties[tableIndex].value
            blocks.push(t.objectExpression([
              t.objectProperty(t.identifier('type'), t.stringLiteral('table')),
              t.objectProperty(t.identifier('table'), tableNode)
            ]))
          }

          // list
          const listIndex = el.properties.findIndex(p => isObjectProperty(p, 'list'))
          if (listIndex !== -1) {
            const listNode = el.properties[listIndex].value
            blocks.push(t.objectExpression([
              t.objectProperty(t.identifier('type'), t.stringLiteral('list')),
              t.objectProperty(t.identifier('list'), listNode)
            ]))
          }

          // quickCheck
          const qcIndex = el.properties.findIndex(p => isObjectProperty(p, 'quickCheck'))
          if (qcIndex !== -1) {
            const qcNode = el.properties[qcIndex].value
            blocks.push(t.objectExpression([
              t.objectProperty(t.identifier('type'), t.stringLiteral('quickCheck')),
              t.objectProperty(t.identifier('data'), qcNode)
            ]))
          }

          if (blocks.length > 0) {
            // create new element object with blocks property only, plus other properties not related to content
            const newProps = []
            // keep non-converted properties like link, etc.
            for (const p of el.properties) {
              const keyName = (p.key.type === 'Identifier') ? p.key.name : p.key.value
              if (['heading','image','caption','body','equation','explanation','table','list','quickCheck'].includes(keyName)) continue
              newProps.push(p)
            }
            // add blocks prop
            newProps.push(t.objectProperty(t.identifier('blocks'), t.arrayExpression(blocks)))
            newElements.push(t.objectExpression(newProps))
            didChange = true
          } else {
            newElements.push(el)
          }
        }
        contentValue.elements = newElements
      }
    }
  }
  return didChange
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walkDir(p)
    else if (e.isFile() && p.endsWith('.js')) migrateFile(p)
  }
}

const target = path.join(__dirname, '..', 'src', 'content', 'materi')
walkDir(target)
console.log('Done')
