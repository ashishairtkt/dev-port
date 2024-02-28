import { useState, useCallback } from "react";
import Button from "./Button";
import Title from "./Title";
import Count from "./Count";
function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}>Increment my age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment my salary</Button>
    </div>
  );
}
export default ParentComponent;
