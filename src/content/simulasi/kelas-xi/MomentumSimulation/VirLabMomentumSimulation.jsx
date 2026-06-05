import { useState, useEffect, useRef } from "react";

export default function VirLabMomentumSimulation() {
  const [massaA, setMassaA] = useState(2);
  const [massaB, setMassaB] = useState(3);
  const [kecepatanAwalA, setKecepatanAwalA] = useState(4);
  const [kecepatanAwalB, setKecepatanAwalB] = useState(-2);

  const [posA, setPosA] = useState(50);
  const [posB, setPosB] = useState(450);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(520);

  const [running, setRunning] = useState(false);

  const posARef = useRef(50);
  const posBRef = useRef(450);
  const velARef = useRef(kecepatanAwalA);
  const velBRef = useRef(kecepatanAwalB);

  const ballSizeA = 20 + massaA * 4;
  const ballSizeB = 20 + massaB * 4;
  const maxPosA = Math.max(0, containerWidth - ballSizeA);
  const maxPosB = Math.max(0, containerWidth - ballSizeB);

  const round2 = (value) => Number(value.toFixed(2));

  const momentumA = round2(massaA * kecepatanAwalA);
  const momentumB = round2(massaB * kecepatanAwalB);
  const momentumAwal = round2(momentumA + momentumB);

  const kecepatanAkhir = round2(
    (massaA * kecepatanAwalA + massaB * kecepatanAwalB) /
      (massaA + massaB)
  );

  useEffect(() => {
    posARef.current = posA;
  }, [posA]);

  useEffect(() => {
    posBRef.current = posB;
  }, [posB]);

  useEffect(() => {
    velARef.current = kecepatanAwalA;
  }, [kecepatanAwalA]);

  useEffect(() => {
    velBRef.current = kecepatanAwalB;
  }, [kecepatanAwalB]);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      setContainerWidth(containerRef.current.clientWidth || 520);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (posA > maxPosA) {
      setPosA(maxPosA);
      posARef.current = maxPosA;
    }

    if (posB > maxPosB) {
      setPosB(maxPosB);
      posBRef.current = maxPosB;
    }
  }, [maxPosA, maxPosB, posA, posB]);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      let nextA = posARef.current + velARef.current;
      let nextB = posBRef.current + velBRef.current;
      let nextVelA = velARef.current;
      let nextVelB = velBRef.current;

      if (nextA <= 0) {
        nextVelA = -nextVelA;
        nextA = 0;
      } else if (nextA >= maxPosA) {
        nextVelA = -nextVelA;
        nextA = maxPosA;
      }

      if (nextB <= 0) {
        nextVelB = -nextVelB;
        nextB = 0;
      } else if (nextB >= maxPosB) {
        nextVelB = -nextVelB;
        nextB = maxPosB;
      }

      if (
        posARef.current + ballSizeA <= posBRef.current &&
        nextA + ballSizeA >= nextB
      ) {
        const totalMass = massaA + massaB;
        const newVelA =
          ((massaA - massaB) / totalMass) * nextVelA +
          (2 * massaB / totalMass) * nextVelB;
        const newVelB =
          (2 * massaA / totalMass) * nextVelA +
          ((massaB - massaA) / totalMass) * nextVelB;

        nextVelA = newVelA;
        nextVelB = newVelB;

        const overlap = nextA + ballSizeA - nextB;
        if (overlap > 0) {
          nextA -= overlap / 2;
          nextB += overlap / 2;
        }
      }

      velARef.current = nextVelA;
      velBRef.current = nextVelB;
      posARef.current = nextA;
      posBRef.current = nextB;

      setPosA(nextA);
      setPosB(nextB);
    }, 20);

    return () => clearInterval(interval);
  }, [running, maxPosA, maxPosB, massaA, massaB]);

  const resetSimulasi = () => {
    const startA = 0;
    const startB = maxPosB;

    setRunning(false);
    setPosA(startA);
    setPosB(startB);
    posARef.current = startA;
    posBRef.current = startB;
    velARef.current = kecepatanAwalA;
    velBRef.current = kecepatanAwalB;
  };

  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        padding: "24px",
        borderRadius: "20px",
        border: "1px solid #334155",
      }}
    >
      <h2
        style={{
          color: "#38bdf8",
          marginBottom: "20px",
        }}
      >
        🚀 Simulasi Momentum
      </h2>

      <div
        style={{
          display: "grid",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <label>
          Massa A = {massaA} kg
          <input
            type="range"
            min="1"
            max="10"
            value={massaA}
            onChange={(e) =>
              setMassaA(Number(e.target.value))
            }
          />
        </label>

        <label>
          Massa B = {massaB} kg
          <input
            type="range"
            min="1"
            max="10"
            value={massaB}
            onChange={(e) =>
              setMassaB(Number(e.target.value))
            }
          />
        </label>

        <label>
          Kecepatan Awal A = {kecepatanAwalA} m/s
          <input
            type="range"
            min="1"
            max="10"
            value={kecepatanAwalA}
            onChange={(e) =>
              setKecepatanAwalA(Number(e.target.value))
            }
          />
        </label>

        <label>
          Kecepatan Awal B = {kecepatanAwalB} m/s
          <input
            type="range"
            min="-10"
            max="-1"
            value={kecepatanAwalB}
            onChange={(e) =>
              setKecepatanAwalB(Number(e.target.value))
            }
          />
        </label>
      </div>

      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: `${containerWidth}px`,
          height: "120px",
          background: "#1e293b",
          borderRadius: "12px",
          overflow: "hidden",
          margin: "0 auto 20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: posA,
            top: 40,
            width: `${ballSizeA}px`,
            height: `${ballSizeA}px`,
            background: "#06b6d4",
            borderRadius: "50%",
            boxShadow:
              "0 0 20px rgba(6,182,212,.8)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: posB,
            top: 40,
            width: `${ballSizeB}px`,
            height: `${ballSizeB}px`,
            background: "#a855f7",
            borderRadius: "50%",
            boxShadow:
              "0 0 20px rgba(168,85,247,.8)",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "14px",
          alignItems: "center",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#cbd5e1",
            fontSize: "14px",
          }}
        >
          <span
            style={{
              width: "14px",
              height: "14px",
              background: "#06b6d4",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
          Bola A = Massa A
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#cbd5e1",
            fontSize: "14px",
          }}
        >
          <span
            style={{
              width: "14px",
              height: "14px",
              background: "#a855f7",
              borderRadius: "50%",
              display: "inline-block",
            }}
          />
          Bola B = Massa B
        </div>
      </div>

      <div
        style={
          {
            display: "flex",
            gap: "12px",
            marginBottom: "16px",
          }
        }
      >
        <button
          onClick={() => setRunning(true)}
          style={{
            background: "#06b6d4",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Jalankan
        </button>

        <button
          onClick={resetSimulasi}
          style={{
            background: "#334155",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>

      <div
        style={{
          background: "#111827",
          padding: "16px",
          borderRadius: "12px",
        }}
      >
        <p>
          Momentum Bola A = <strong>{momentumA.toFixed(2)} kg·m/s</strong>
        </p>

        <p>
          Momentum Bola B = <strong>{momentumB.toFixed(2)} kg·m/s</strong>
        </p>

        <p>
          Momentum Total Awal = <strong>
            {momentumAwal.toFixed(2)} kg·m/s
          </strong>
        </p>

        <p>
          Kecepatan Setelah Tumbukan = <strong>
            {kecepatanAkhir.toFixed(2)} m/s
          </strong>
        </p>
      </div>
    </div>
  );
}