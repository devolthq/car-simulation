"use client";
import "react-toastify/dist/ReactToastify.css";
import CarMock from "@/components/CarMock/CarMock";
import MultimediaMock from "@/components/MultimediaMock/MultimediaMock";
import { useState } from "react";
import SimulationDialog from "@/components/SimulationDialog/SimulationDialog";
import logo from "@/public/logo_horizontal.svg";
import Image from "next/image";
import Simulation from "@/components/Simulation/Simulation";
import { Car } from "lucide-react";
import { ToastContainer } from "react-toastify";
export default function Home() {
  const [simulationState, setSimulationState] = useState(1);
  /*

  ------- SIMULATION STATES ----------
  
  1:Dialog
    show the dialog exaplaining the simulation. Closing this dialog should trigger the state change

  2. Simulation
    plays the animation of the car, render the app itself and allows the user to interact with the screen

  3. End
    Simulation ends 5 seconds after the user buys energy. Show another dialog explaining the end of the simulation
  */

  return (
    <main className="overflow-hidden">
      <ToastContainer position="bottom-center" theme="dark" bodyClassName={"font-semibold"}/>

      {/* <div className="absolute top-4 z-20 mx-auto w-screen flex justify-center text-xl">
        <Image src={logo} alt="logo" width={150} />
      </div> */}
      <SimulationDialog
        simulationState={simulationState}
        setSimulationState={setSimulationState}
      />
      <CarMock
        simulationState={simulationState}
        setSimulationState={setSimulationState}
      />
      <MultimediaMock
        simulationState={simulationState}
        setSimulationState={setSimulationState}
      >
        <Simulation />
      </MultimediaMock>
    </main>
  );
}
