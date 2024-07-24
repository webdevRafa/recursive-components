import { useState } from "react";
import "./App.css";
import { Content } from "./components/Content";
import { Header } from "./components/Header";

function App() {
  const [menu, setMenu] = useState(false);

  const handleToggle = () => {
    setMenu((prevMenu) => !prevMenu);
  };
  return (
    <>
      <Header handleToggle={handleToggle}></Header>
      <Content />
      <section className="relative z-[-1]">
        {menu && (
          <div className="absolute z-[0] w-full top-0 h-[100vh] grid items-center justify-center">
            <div className="w-[90%] mx-auto py-10 px-[40px] text-white">
              <h1 className="text-3xl font-arsenal font-extrabold my-20 text-blue-200">
                Mastering recursive components in React (or any other front-end
                framework) can offer several benefits:
              </h1>
              <ul>
                <li className="mb-5">
                  <span className="text-3xl">
                    Elegant Solutions to Hierarchical Data:
                  </span>
                  <p className="mt-2">
                    Recursive components simplify the rendering of hierarchical
                    data structures, such as trees or nested lists, by enabling
                    components to call themselves.
                  </p>
                </li>
                <li className="mb-5">
                  <span className="text-3xl">Code Reusability:</span>
                  <p className="mt-2">
                    Recursion allows you to reuse the same component logic for
                    different levels of a hierarchy, reducing redundancy and
                    improving maintainability.
                  </p>
                </li>
                <li className="mb-5">
                  <span className="text-3xl">Simplified Logic:</span>
                  <p className="mt-2">
                    Recursive components can simplify the logic for traversing
                    and rendering deeply nested structures, making the code more
                    readable and easier to understand.
                  </p>
                </li>
                <li className="mb-5">
                  <span className="text-3xl">Enhanced Readability:</span>
                  <p className="mt-2">
                    By using recursion, the code to handle complex data
                    structures becomes more concise, improving overall
                    readability.
                  </p>
                </li>
                <li className="mb-5">
                  <span className="text-3xl">Scalability:</span>
                  <p className="mt-2">
                    Recursive components make it easier to scale applications
                    that involve dynamic and deeply nested structures, as
                    changes only need to be made in one place.
                  </p>
                </li>
                <li className="mb-5">
                  <span className="text-3xl">Flexibility:</span>
                  <p className="mt-2">
                    Recursion provides flexibility in handling varying levels of
                    nesting without needing to hard-code specific depths, making
                    the components more adaptable to changes in data structures.
                  </p>
                </li>
                <li className="mb-5">
                  <span className="text-3xl">Reduced Code Complexity:</span>
                  <p className="mt-2">
                    Recursive approaches can reduce the complexity of the code
                    by eliminating the need for complex loops and conditional
                    logic, leading to cleaner and more maintainable code.
                  </p>
                </li>
                <li className="mb-5">
                  <span className="text-3xl">Improved Performance:</span>
                  <p className="mt-2">
                    Recursive components can be more efficient in terms of
                    performance when dealing with large nested structures, as
                    they avoid the overhead of managing multiple component
                    instances manually.
                  </p>
                </li>
                <li className="mb-5">
                  <span className="text-3xl">Ease of Testing:</span>
                  <p className="mt-2">
                    Recursive components can be easier to test as they
                    encapsulate the logic for handling nested structures within
                    a single component, making unit tests more straightforward.
                  </p>
                </li>
                <li className="mb-5">
                  <span className="text-3xl">Consistent UI:</span>
                  <p className="mt-2">
                    Using recursion ensures a consistent approach to rendering
                    nested elements, leading to a more uniform and predictable
                    user interface.
                  </p>
                </li>
              </ul>
              <h1 className="text-3xl mt-20 bg-blue-600 p-10">
                Mastering recursive components can significantly enhance your
                ability to handle complex data structures and improve the
                overall architecture of your applications.
              </h1>
            </div>
          </div>
        )}
      </section>
      <div className="h-[1800px]"></div>
    </>
  );
}

export default App;
