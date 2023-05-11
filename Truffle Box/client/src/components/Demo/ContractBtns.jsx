import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setValue }) {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const handleInputChange2 = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue2(e.target.value);
    }
  };

  const read = async () => {
    const value = await contract.methods.read().call({ from: accounts[0] });
    setValue(value);
  };

  const write = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue2 === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newValue = parseInt(inputValue2);
    await contract.methods.write(newValue).send({ from: accounts[0] });
  };

  const modifyValue = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue2 === "") {
      alert("Please enter a value to write.");
      return;
    }
    const oldValue = parseInt(await contract.methods.read().call({ from: accounts[0] }));
    const newValue = parseInt(inputValue2);
    await contract.methods.write(newValue + oldValue).send({ from: accounts[0] });
  };

  return (
    <div className="btns">

      <button onClick={read}>
        read()
      </button>

      <div onClick={write} className="input-btn">
        write(<input
          type="text"
          placeholder="uint"
          value={inputValue}
          onChange={handleInputChange}
        />)
      </div>
      
      <div onClick={modifyValue} className="input-btn">
        modifyValue(<input
          type="text"
          placeholder="uint"
          value={inputValue2}
          onChange={handleInputChange2}
        />)
      </div>

    </div>
  );
}

export default ContractBtns;
