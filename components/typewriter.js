import TypeIt from 'typeit-react';

const Typewriter = () => {
  return (
    <div>
      <TypeIt className="typewriter"
        options={{
          strings: ['Web Developer', 'Problem Solver', 'Product-Minded Engineer'],
          speed: 100,
          waitUntilVisible: true,
          breakLines: false,
          nextStringDelay: 750
        }}
      />
    </div>
  );
};

export default Typewriter;