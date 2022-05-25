import { useState } from "react";
import ControlTable from "../../components/ControlTable/ControlTable";
import CreateDevices from "../../components/CreateDevices";
import { data } from "../../Models/tableData";
import MemoryBar from "../../components/MemoryBar/MemoryBar";

const MainPage = () => {
  const [devices, setDevices] = useState([...data]);
  const [progress, setProgress] = useState(20);

  const createNewDevice = async (newDevice) => {
    const id = newDevice[0].id;
    let arr = [];
    setDevices((oldState) => [...oldState, ...newDevice]);
    await new Promise((resolve) => {
      setTimeout((resolve) => {
        setDevices((oldState) => {
          oldState.forEach((dev) => {
            let newObj = {};
            if (dev.id === id) {
              newObj = { ...dev, state: "disonnected" };
            } else {
              newObj = { ...dev };
            }
            arr.push(newObj);
          });
          return arr;
        });
      }, 3000);
    });
  };

  const updateDeviceState = (id) => {
    let arr = [];

    setDevices((oldState) => {
      oldState.forEach((dev) => {
        let newObj = {};
        if (dev.id === id) {
          newObj = {
            ...dev,
            state: dev.state === "active" ? "disconnected" : "active",
          };
        } else {
          newObj = { ...dev };
        }
        arr.push(newObj);
      });
      return arr;
    });
  };

  const changeProgress = async (id) => {
    let activeState = "";
    let activeSize = "";
    await new Promise((resolve) => {
      setTimeout((resolve) => {
        
        devices.forEach((elem) => {
          if (elem.id === id) {
            activeState = elem.state;
            activeSize = elem.size;
            
          }
        });
        setProgress((old) =>
          activeState === "active"
            ? old - parseInt(activeSize)
            : parseInt(activeSize) + old
        );
      }, 2000);
    });
  };
  return (
    <div className="main-page__main-container">
      <div className="main-page__second-container">
        <CreateDevices devices={devices} newDevice={createNewDevice} changeProgress={changeProgress}/>
        <ControlTable
          devices={devices}
          changeState={updateDeviceState}
          changeProgress={changeProgress}
        />
      </div>
      <div className="main-page__progress-bar">
        <h2>Memoria</h2>
        <MemoryBar progress={progress}></MemoryBar>
      </div>
    </div>
  );
};

export default MainPage;
