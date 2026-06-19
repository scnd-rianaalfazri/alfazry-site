import { useState, useEffect, useRef } from "react";

export default function VirLabMomentumSimulation() {
  const [massaA, setMassaA] = useState(2);
  const [massaB, setMassaB] = useState(3);
  const [kecepatanAwalA, setKecepatanAwalA] = useState(4);
  const [kecepatanAwalB, setKecepatanAwalB] = useState(-2);

  const [restitusi, setRestitusi] = useState(1);

  const [posA, setPosA] = useState(50);
  const [posB, setPosB] = useState(450);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(520);

  const [running, setRunning] = useState(false);

  const [kecepatanAkhirA, setKecepatanAkhirA] = useState(null);
  const [kecepatanAkhirB, setKecepatanAkhirB] = useState(null);

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

  const momentumSaatIniA = round2(
  massaA * velARef.current
  );
  const momentumSaatIniB = round2(
    massaB * velBRef.current
  );
  const momentumTotalSaatIni = round2(
    momentumSaatIniA + momentumSaatIniB
  );

  const energiAwalA = round2(
    0.5 *
    massaA *
    kecepatanAwalA *
    kecepatanAwalA
  );

  const energiAwalB = round2(
    0.5 *
    massaB *
    kecepatanAwalB *
    kecepatanAwalB
  );

  const energiTotalAwal = round2(
    energiAwalA + energiAwalB
  );

  const energiSaatIniA = round2(
    0.5 *
    massaA *
    velARef.current *
    velARef.current
  );

  const energiSaatIniB = round2(
    0.5 *
    massaB *
    velBRef.current *
    velBRef.current
  );

  const energiTotalSaatIni = round2(
    energiSaatIniA +
    energiSaatIniB
  );

  const [menyatu, setMenyatu] = useState(false);

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

      if (menyatu) {
        nextA = posARef.current + velARef.current;
        nextB = nextA + ballSizeA;

        velARef.current = nextVelA;
        velBRef.current = nextVelA;
      }

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
      const u1 = nextVelA;
      const u2 = nextVelB;

      const newVelA =
        ((massaA - restitusi * massaB) * u1 +
          (1 + restitusi) * massaB * u2) /
        (massaA + massaB);

      const newVelB =
        ((massaB - restitusi * massaA) * u2 +
          (1 + restitusi) * massaA * u1) /
        (massaA + massaB);

        nextVelA = newVelA;
        nextVelB = newVelB;

        if (restitusi === 0) {
          nextB = nextA + ballSizeA;
          setMenyatu(true);
        }
        
        setKecepatanAkhirA(round2(newVelA));
        setKecepatanAkhirB(round2(newVelB)); 

        if (restitusi !== 0) {
          const overlap = nextA + ballSizeA - nextB;

          if (overlap > 0) {
            nextA -= overlap / 2;
            nextB += overlap / 2;
          }
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
    }, [
      running,
      maxPosA,
      maxPosB,
      massaA,
      massaB,
      restitusi,
    ]);

  const resetSimulasi = () => {
    const startA = 0;
    const startB = maxPosB;

    setRunning(false);
    setKecepatanAkhirA(null);
    setKecepatanAkhirB(null);
    setMenyatu(false);
    setPosA(startA);
    setPosB(startB);
    posARef.current = startA;
    posBRef.current = startB;
    velARef.current = kecepatanAwalA;
    velBRef.current = kecepatanAwalB;
  };
  
  const arahA = velARef.current >= 0 ? "→" : "←";
  const arahB = velBRef.current >= 0 ? "→" : "←";
  
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
      <p
        style={{
          color: "#94a3b8",
          marginBottom: "20px",
          fontSize: "14px",
        }}
      >
        {restitusi === 1
          ? "Tumbukan Lenting Sempurna (e = 1)"
          : restitusi === 0
          ? "Tumbukan Tidak Lenting Sempurna (e = 0)"
          : `Tumbukan Lenting Sebagian (e = ${restitusi.toFixed(1)})`}
      </p>
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

        <label>
          Koefisien Restitusi (e) = {restitusi.toFixed(1)}

          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={restitusi}
            onChange={(e) =>
              setRestitusi(Number(e.target.value))
            }
          />
        </label>
      </div>
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1000px",
          height: "120px",
          background: "#1e293b",
          borderRadius: "12px",
          overflow: "hidden",
          margin: "0 auto 20px",
        }}
      >
      <>
        <div style={{
            position: "absolute",
            left: posA - 10,
            top: 10,
            color: "#67e8f9",
            fontWeight: "bold",
            fontSize: "18px",
            whiteSpace: "nowrap",
          }}
          >
          {arahA} {Math.abs(velARef.current).toFixed(1)} m/s
        </div>  
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
      </>
      <>
        <div
          style={{
            position: "absolute",
            left: posB - 10,
            top: 10,
            color: "#d8b4fe",
            fontWeight: "bold",
            fontSize: "18px",
            whiteSpace: "nowrap",
          }}
        >
          {arahB} {Math.abs(velBRef.current).toFixed(1)} m/s
        </div>
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
      </>
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
          ▶ Jalankan
        </button>
        <button
          onClick={() => setRunning(false)}
          style={{
            background: "#f59e0b",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          ⏸ Jeda
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
          🔄 Reset
        </button>
      </div>
      <p
        style={{
          color: "#fbbf24",
          fontWeight: "bold",
          marginBottom: "12px",
        }}
      >
        {menyatu
          ? "📌 Kedua benda bergerak bersama setelah tumbukan."
          : "💥 Benda belum menyatu."}
      </p>
      <div
        style={{
          marginBottom: "12px",
          fontWeight: "bold",
          color:
            restitusi === 1
              ? "#22c55e"
              : restitusi === 0
              ? "#ef4444"
              : "#f59e0b",
        }}
      >
        {restitusi === 1
          ? "🟢 Tumbukan Lenting Sempurna"
          : restitusi === 0
          ? "🔴 Tumbukan Tidak Lenting Sempurna"
          : "🟡 Tumbukan Lenting Sebagian"}
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
          Kecepatan Akhir Bola A ={" "}
          <strong>
            {kecepatanAkhirA !== null
              ? `${kecepatanAkhirA.toFixed(2)} m/s`
              : "-"}
          </strong>
        </p>

        <p>
          Kecepatan Akhir Bola B ={" "}
          <strong>
            {kecepatanAkhirB !== null
              ? `${kecepatanAkhirB.toFixed(2)} m/s`
              : "-"}
          </strong>
        </p>

        <hr
          style={{
            borderColor: "#374151",
            margin: "12px 0",
          }}
        />

        <h4>Momentum Real-Time</h4>

        <p>
          Momentum A =
          <strong>
            {" "}
            {momentumSaatIniA.toFixed(2)}
            {" "}kg·m/s
          </strong>
        </p>

        <p>
          Momentum B =
          <strong>
            {" "}
            {momentumSaatIniB.toFixed(2)}
            {" "}kg·m/s
          </strong>
        </p>

        <p>
          Momentum Total =
          <strong
            style={{
              color: "#22c55e",
            }}
          >
            {" "}
            {momentumTotalSaatIni.toFixed(2)}
            {" "}kg·m/s
          </strong>
        </p>

        <hr
          style={{
            borderColor: "#374151",
            margin: "12px 0",
          }}
        />

        <h4>Energi Kinetik Awal</h4>
        
        <p>
          Energi A =
          <strong>
            {" "}
            {energiAwalA.toFixed(2)}
            {" "}J
          </strong>
        </p>

        <p>
          Energi B =
          <strong>
            {" "}
            {energiAwalB.toFixed(2)}
            {" "}J
          </strong>
        </p>

        <p>
          Energi Total =
          <strong>
            {" "}
            {energiTotalAwal.toFixed(2)}
            {" "}J
          </strong>
        </p>

        <hr
          style={{
            borderColor: "#374151",
            margin: "12px 0",
          }}
        />

        <h4>Energi Kinetik Real-Time</h4>

        <p>
          Energi A =
          <strong>
            {" "}
            {energiSaatIniA.toFixed(2)}
            {" "}J
          </strong>
        </p>

        <p>
          Energi B =
          <strong>
            {" "}
            {energiSaatIniB.toFixed(2)}
            {" "}J
          </strong>
        </p>

        <p>
          Energi Total =
          <strong
            style={{
              color:
                restitusi === 1
                  ? "#22c55e"
                  : "#f59e0b",
            }}
          >
            {" "}
            {energiTotalSaatIni.toFixed(2)}
            {" "}J
          </strong>
        </p>

        <hr
          style={{
            borderColor: "#374151",
            margin: "12px 0",
          }}
        />

        <h4>Analisis</h4>

        <p>
          Momentum Awal:
          {" "}
          {momentumAwal.toFixed(2)}
          {" "}kg·m/s
        </p>

        <p>
          Momentum Saat Ini:
          {" "}
          {momentumTotalSaatIni.toFixed(2)}
          {" "}kg·m/s
        </p>

        <p>
          Energi Awal:
          {" "}
          {energiTotalAwal.toFixed(2)}
          {" "}J
        </p>

        <p>
          Energi Saat Ini:
          {" "}
          {energiTotalSaatIni.toFixed(2)}
          {" "}J
        </p>
      </div>
    </div>
  );
}