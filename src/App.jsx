import React, { useState } from 'react';
import Modal from 'react-modal';

// Componente que muestra un código en un box y un botón para ejecutarlo
// Componente que muestra un código en un box y un botón para ejecutarlo
const CodeBox = ({ code, onRun }) => {
  return (
    <div style={{ backgroundColor: 'black', padding: '10px', marginBottom: '20px', width: 'calc(80% - 40px)', margin: '20px auto', borderRadius: '5px', display: 'block' }}>
      <pre style={{ color: '#DCDCAA', margin: '0', maxHeight: '300px', overflowY: 'auto' }}>{code}</pre>
      <button onClick={onRun} style={{ backgroundColor: '#569CD6', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>Ejecutar Código</button>
    </div>
  );
};


// Prototipo de baja fidelidad
const BajaFidelidadContent = () => (
  <div>
    
    <h2>Prototipo de baja fidelidad</h2>
    <p>Representaciones simples y de bajo costo para explorar la estructura general y las interacciones del sistema.</p>
    <p>Ejemplo: Bosquejos en papel</p>
  </div>
);

const codeBaja = `
const BajaFidelidad = () => {
  return (
    <div>
      <h2>Prototipo de baja fidelidad</h2>
      <p>Representaciones simples y de bajo costo para explorar la estructura general y las interacciones del sistema.</p>
      <p>Ejemplo: Bosquejos en papel</p>
    </div>
  );
};
`;

const BajaFidelidad = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const runCode = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>Prototipos</h1>
      </div>
      <CodeBox code={codeBaja} onRun={runCode} />
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <div><BajaFidelidadContent /></div>
      </Modal>
    </div>
  );
};

// Prototipo de alta fidelidad
const AltaFidelidadContent = () => (
  <div>
    <h2>Prototipo de alta fidelidad</h2>
    <p>Prototipo más detallado que se acerca al producto final en apariencia y funcionalidad.</p>
    <p>Ejemplo: Interfaz de usuario diseñada con Figma</p>
    <div style={{ position: 'relative', width: '30%', paddingBottom: '16.25%', height: 0 }}>
      <iframe
        src="https://www.youtube.com/embed/t3lTO4kZ7dU?rel=0"
        title="Alta Fidelidad"
        frameBorder="0"
        allowFullScreen
        style={{ position: 'absolute', width: '100%', height: '100%', left: 0, top: 0 }}
      />
    </div>
  </div>
);


const codeAlta = `
const AltaFidelidadContent = () => (
  <div>
    <h2>Prototipo de alta fidelidad</h2>
    <p>Prototipo más detallado que se acerca al producto final en apariencia y funcionalidad.</p>
    <p>Ejemplo: Interfaz de usuario diseñada con Figma</p>
    <iframe
      src="https://youtu.be/t3lTO4kZ7dU?si=zQtbH_VZ4IeZZohC"
      width="640px"
      height="320px"
      title="Alta Fidelidad"
    />
  </div>
);
`;



const AltaFidelidad = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const runCode = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <CodeBox code={codeAlta} onRun={runCode} />
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <div><AltaFidelidadContent /></div>
      </Modal>
    </div>
  );
};

// Prototipo de software funcional
const SoftwareFuncionalContent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Prototipo de software funcional</h2>
      <p>Versión inicial del software con funcionalidades básicas.</p>
      <p>Ejemplo: Contador - Haz clic para incrementar: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

const codeSoftware = `
const SoftwareFuncionalContent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Prototipo de software funcional</h2>
      <p>Versión inicial del software con funcionalidades básicas.</p>
      <p>Ejemplo: Contador - Haz clic para incrementar: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
`;

const SoftwareFuncional = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const runCode = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <CodeBox code={codeSoftware} onRun={runCode} />
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <div><SoftwareFuncionalContent /></div>
      </Modal>
    </div>
  );
};



const UserPrototype = () => {
  const [feedback, setFeedback] = useState('');
  const [commentList, setCommentList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Feedback:', feedback);
    setCommentList([...commentList, feedback]); // Agregar el nuevo comentario a la lista
    setFeedback(''); // Limpiar el campo de comentarios después de enviar
  };

  return (
    <div>
      <h2>Prototipo de usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Comentarios:
          <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
        </label>
        <button type="submit">Enviar feedback</button>
      </form>
      <div>
        <h3>Comentarios:</h3>
        {commentList.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
};

const codePrototipo = `
    const UserPrototype = () => {
    const [feedback, setFeedback] = useState('');
    const [commentList, setCommentList] = useState([]);

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Feedback:', feedback);
      setCommentList([...commentList, feedback]); // Agregar el nuevo comentario a la lista
      setFeedback(''); // Limpiar el campo de comentarios después de enviar
    };

    return (
      <div>
        <h2>Prototipo de usuario</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Comentarios:
            <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />
          </label>
          <button type="submit">Enviar feedback</button>
        </form>
        <div>
          <h3>Comentarios:</h3>
          {commentList.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
        </div>
      </div>
    );
  };
  `;

const PrototypeFuncional = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const runCode = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <CodeBox code={codePrototipo} onRun={runCode} />
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <div><UserPrototype/></div>
      </Modal>
    </div>
  );
};

const DisposablePrototype = () => {
  const [feature, setFeature] = useState('');
  const [lastFeature, setLastFeature] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Feature:', feature);
    // Aquí puedes realizar alguna acción con la característica
    // Por ejemplo, mostrar un mensaje de confirmación en el modal
    setLastFeature(feature); // Guardar la última característica ingresada
    alert(`Característica "${feature}" ingresada correctamente`);
    setFeature('');
  };

  return (
    <div>
      <h2>Prototipo Desechable</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Característica:
          <input type="text" value={feature} onChange={(e) => setFeature(e.target.value)} />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {lastFeature && (
        <div>
          <h3>Última característica ingresada:</h3>
          <p>{lastFeature}</p>
        </div>
      )}
    </div>
  );
};

// Código del componente Prototipo Desechable
const codeDisposablePrototype = `
const DisposablePrototype = () => {
  const [feature, setFeature] = useState('');
  const [lastFeature, setLastFeature] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Feature:', feature);
    // Aquí puedes realizar alguna acción con la característica
    // Por ejemplo, mostrar un mensaje de confirmación en el modal
    setLastFeature(feature); // Guardar la última característica ingresada
    alert("Característica '$'{feature} ingresada correctamente");
    setFeature('');0
  };

  return (
    <div>
      <h2>Prototipo Desechable</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Característica:
          <input type="text" value={feature} onChange={(e) => setFeature(e.target.value)} />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {lastFeature && (
        <div>
          <h3>Última característica ingresada:</h3>
          <p>{lastFeature}</p>
        </div>
      )}
    </div>
  );
};
`;

// Componente Prototipo Desechable Funcional
const DisposableFunctional = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const runCode = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <CodeBox code={codeDisposablePrototype} onRun={runCode} />
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <div><DisposablePrototype/></div>
      </Modal>
    </div>
  );
};

const DataPrototype = () => {
  const [data, setData] = useState('');
  const [dataList, setDataList] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.trim() !== '') {
      setDataList([...dataList, data]);
      setData('');
    }
  };

  return (
    <div>
      <h2>Prototipo de Datos</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Ingrese un dato:
          <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
        </label>
        <button type="submit">Agregar</button>
      </form>
      <div>
        <h3>Lista de Datos:</h3>
        <ul>
          {dataList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const codeData = `
const DataPrototype = () => {
  const [data, setData] = useState('');
  const [dataList, setDataList] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.trim() !== '') {
      setDataList([...dataList, data]);
      setData('');
    }
  };

  return (
    <div>
      <h2>Prototipo de Datos</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Ingrese un dato:
          <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
        </label>
        <button type="submit">Agregar</button>
      </form>
      <div>
        <h3>Lista de Datos:</h3>
        <ul>
          {dataList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
`
// Componente Prototipo Desechable Funcional
const DataFunctional = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const runCode = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <CodeBox code={codeData} onRun={runCode} />
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <div><DataPrototype/></div>
      </Modal>
    </div>
  );
};

// Continuar con los demás componentes para cada tipo de prototipo...

// Componente principal
const App = () => {
  return (
    <div>
      <BajaFidelidad />
      <hr />
      <AltaFidelidad />
      <hr />
      <SoftwareFuncional />
      <hr/>
      <PrototypeFuncional />
      <hr/>
      <DisposableFunctional/>
      <hr/>
      <DataFunctional />
    </div>
  );
};

export default App;
