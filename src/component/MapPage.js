import React, { useEffect, useRef } from "react";
import * as BABYLON from "babylonjs";


const Cuboid = ({ image }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);
    // scene.clearColor = new BABYLON.Color4(255, 213, 77);

    canvas.width = 800;
    canvas.height = 500;
    const camera = new BABYLON.ArcRotateCamera(
      "Camera",
      BABYLON.Tools.ToRadians(0),
      BABYLON.Tools.ToRadians(0),
      5,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight(
      "HemiLight",
      new BABYLON.Vector3(0, 1, 0),
      scene
    );

    const box = BABYLON.MeshBuilder.CreateBox("box", { size: 2 }, scene);
    const boxMaterial = new BABYLON.StandardMaterial("boxMaterial", scene);

    boxMaterial.diffuseTexture = new BABYLON.Texture(image, scene);
    boxMaterial.diffuseTexture.hasAlpha = true;

    box.material = boxMaterial;

    engine.runRenderLoop(() => {
      scene.render();
    });

    return () => {
      engine.stopRenderLoop();
      scene.dispose();
      engine.dispose();
    };
  }, [image]);

  return <canvas ref={canvasRef} />;
};
export default Cuboid;
