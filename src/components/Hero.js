import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PlaneOne from '../images/planet.svg';
import PlaneTwo from '../images/planet-2.svg';
import PlaneThree from '../images/planet-3.svg';
import PlaneFour from '../images/planet-4.svg';
const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #131313;
`;
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding: 3rem calc((100vw - 1300px) / 2);
    @media screen and (max-width: 768px) {
        grid-grid-template-colums: 1fr;
    }
`;
const ColumnLeft = styled.div`
    display: flex;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 2rem;
    h1 {
        margin-bottom: 0.5rem;
        font-size: 2rem;
    }
    p {
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
    }
`;

const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #fff;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: #fff;
`;
const Image = styled(motion.img)`
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
`;
const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

    ${Image}:nth-child(1) {
        top: 10px;
        left: 10px;
    }
    ${Image}:nth-child(2) {
        top: 170px;
        right: 10px;
    }
    ${Image}:nth-child(3) {
        top: 350px;
        left: 50px;
    }
    ${Image}:nth-child(4) {
        bottom: 100px;
        right: 75px;
    }
`;
const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
};
function Hero(props) {
    return (
        <div>
            <Section>
                <Container>
                    <ColumnLeft>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Welcome to Space
                        </motion.h1>
                        <motion.p
                            variants={fadeLeft}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1 }}
                        >
                            Journey to the unknown
                        </motion.p>
                        <Button
                            whileTap={{
                                scale: 0.95,
                                backgroundColor: '#67F6E7',
                                border: 'none',
                                color: '#000',
                            }}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                //transition을 안에 넣어야 반응이 빠름
                                transition: { duration: 1.5 },
                            }}
                            whileHover={{ scale: 1.05 }}
                            // transition={{ duration: 1.5 }}
                        >
                            Get Started
                        </Button>
                    </ColumnLeft>
                    <ColumnRight>
                        <Image
                            src={PlaneOne}
                            alt="planet"
                            whileTap={{ scale: 0.9 }}
                            drag={true}
                            dragConstraints={{
                                left: 0,
                                right: 250,
                                top: 0,
                                bottom: 50,
                            }}
                            initial={{ opacity: 0, y: -100 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 1 },
                            }}
                        />
                        <Image
                            src={PlaneTwo}
                            alt="planet"
                            whileTap={{ scale: 0.6 }}
                            drag={true}
                            dragConstraints={{
                                left: 50,
                                right: 0,
                                top: 0,
                                bottom: 50,
                            }}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 1 },
                            }}
                        />
                        <Image
                            src={PlaneThree}
                            alt="planet"
                            whileTap={{ scale: 0.8 }}
                            drag={true}
                            dragConstraints={{
                                left: 0,
                                right: 250,
                                top: 0,
                                bottom: 50,
                            }}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: { duration: 1 },
                            }}
                        />
                        <Image
                            src={PlaneFour}
                            alt="planet"
                            whileTap={{ scale: 0.9 }}
                            drag={true}
                            dragConstraints={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 50,
                            }}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 1 },
                            }}
                        />
                    </ColumnRight>
                </Container>
            </Section>
        </div>
    );
}

export default Hero;
