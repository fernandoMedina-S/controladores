import { useState } from "react";
import ControlTable from "../../components/ControlTable/ControlTable";
import CreateDevices from "../../components/CreateDevices";
import { data } from "../../Models/tableData";

const MainPage = () => {

    const [devices, setDevices] = useState([...data]);

    const createNewDevice = async (newDevice) => {
        const id = newDevice[0].id;
        let arr = [];
        setDevices((oldState)=>[...oldState, ...newDevice] );
        await new Promise(resolve => {
            setTimeout((resolve)=>{
                setDevices((oldState)=>{
                    oldState.forEach((dev)=>{
                        let newObj = {}
                        if(dev.id === id){
                            newObj = {...dev, state: "active"};
                        }else{
                            newObj = {...dev};
                        }
                        arr.push(newObj);
                    })
                    return arr;
                })
                
            }, 3000)
        })
        
    }

    const updateDeviceState = (id) => {

        let arr = [];

        setDevices((oldState)=>{
            oldState.forEach((dev)=>{
                let newObj = {}
                if(dev.id === id){
                    newObj = {...dev, state: dev.state === "active" ? "disconnected" : "active"};
                }else{
                    newObj = {...dev};
                }
                arr.push(newObj);
            })
            return arr;
        })
    }
    return (
        <div className="main-page__main-container">
            <CreateDevices devices={devices} newDevice={createNewDevice}/>
            <ControlTable devices={devices} changeState={updateDeviceState}/>

        </div>
    )
}

export default MainPage;