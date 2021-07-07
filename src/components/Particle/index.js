import * as React from 'react';
import Particles from 'react-particles-js'
import * as data from './particlesjs-config.json';
import * as data2 from './particlesjs-config2.json';

const Particle = () => {

    const style = {
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -999
      }

    return (
        <Particles params={data2.default} width="100%" height="100vh" style={style} />
    )
}

export default Particle;