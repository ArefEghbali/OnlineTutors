import { useEffect, useRef, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useSpring, animated } from 'react-spring'
import { Spring } from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor'

import Button from '../Components/Button'

import {
    UilInstagram,
    UilDribbble,
    UilArrowRight,
    UilEnvelope,
    UilPhone,
    UilBars,
    UilMultiply,
} from '@iconscout/react-unicons'

export default function Home() {
    const cursor = useRef(null)
    const heroImage = useRef(null)
    const footer = useRef(null)

    const [toggle, setToggle] = useState(false)

    const fadeShapeBottom = useSpring({
        from: {
            opacity: 0,
            transform: 'translateY(-20px)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0px)',
        },
    })

    const justFade = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        delay: 200,
    })

    const fadeBottom = useSpring({
        from: {
            opacity: 0,
            transform: 'translateY(-100px)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0px)',
        },
        delay: 300,
    })

    const fadeShapeTop = useSpring({
        from: {
            opacity: 0,
            transform: 'translateY(50px)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0px)',
        },
        delay: 700,
    })

    const fadeScale = useSpring({
        from: {
            opacity: 0,
            transform: 'scale(0.1)',
        },
        to: {
            opacity: 1,
            transform: 'scale(1)',
        },
        delay: 900,
    })

    useEffect(() => {
        const mouseCursor = document.querySelector('.cursor')
        const navbarLinks = document.querySelectorAll('.navigation a')

        if (
            !/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            document.addEventListener('mousemove', parallax)
            document.addEventListener('mousemove', handleCursor)
        }

        function parallax(e) {
            document.querySelectorAll('.move-paral').forEach((layer) => {
                const speed = layer.getAttribute('data-speed')

                const x = (window.innerWidth - e.pageX * speed) / 100
                const y = (window.innerHeight - e.pageY * speed) / 100

                if (e.pageY <= window.innerHeight) {
                    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
                }
            })
        }

        function handleCursor(e) {
            const xPos = e.pageX
            const yPos = e.pageY

            mouseCursor.style.left = `${xPos}px`
            mouseCursor.style.top = `${yPos}px`
        }

        function removeLinkHover(e) {
            cursor.current.classList.remove('cursor-hover')
        }

        function addLinkHover(e) {
            cursor.current.classList.add('cursor-hover')
        }

        navbarLinks.forEach((link) => {
            link.addEventListener('mouseover', (e) => {
                addLinkHover()
            })

            link.addEventListener('mouseleave', (e) => {
                removeLinkHover()
            })
        })

        function filterHeroImage(e) {
            cursor.current.classList.add('hero-hover')
        }

        function removeFilterHeroImage(e) {
            cursor.current.classList.remove('hero-hover')
        }

        heroImage.current.addEventListener('mouseover', filterHeroImage)
        heroImage.current.addEventListener('mouseleave', removeFilterHeroImage)

        function handleCardLink() {
            cursor.current.classList.add('card-hover')
        }

        function removeCardLink() {
            cursor.current.classList.remove('card-hover')
        }

        const cardLinks = document.querySelectorAll('.card-link')

        cardLinks.forEach((link) => {
            link.addEventListener('mouseover', handleCardLink)
            link.addEventListener('mouseleave', removeCardLink)
        })

        function handleFooter() {
            cursor.current.classList.add('footer-hover')
        }

        function removeFooter() {
            cursor.current.classList.remove('footer-hover')
        }

        footer.current.addEventListener('mouseover', handleFooter)
        footer.current.addEventListener('mouseleave', removeFooter)

        return () => {
            document.removeEventListener('mousemove', parallax)
            document.removeEventListener('mousemove', handleCursor)
            document.removeEventListener('mouseover', addLinkHover)
            document.removeEventListener('mouseleave', removeLinkHover)
            document.removeEventListener('mouseover', filterHeroImage)
            document.removeEventListener('mouseleave', removeFilterHeroImage)
            document.removeEventListener('mouseover', handleCardLink)
            document.removeEventListener('mouseleave', removeCardLink)
            document.removeEventListener('mouseover', handleFooter)
            document.removeEventListener('mouseleave', removeFooter)
        }
    }, [])

    return (
        <div>
            <Head>
                <title>Online Tutors</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="cursor hidden md:block" ref={cursor}></div>
            <div className="fixed hidden 2xl:flex top-1/2 md:-left-14 xl:-left-8 transform -rotate-90">
                <Link href="https://instagram.com/arefeghbalidev">
                    <a target="_blank">
                        <span className="flex items-center">
                            <UilInstagram />
                            Instagram
                        </span>
                    </a>
                </Link>
                <Link href="https://dribbble.com/arefeghbali">
                    <a target="_blank" className="ml-8">
                        <span className="flex items-center">
                            <UilDribbble />
                            Dribbble
                        </span>
                    </a>
                </Link>
            </div>
            <animated.div
                className={`md:container mx-auto px-4 md:px-0 ${
                    toggle
                        ? 'h-screen top-0 right-0 left-0 bottom-0 fixed navigation bg-indigo-500'
                        : ''
                }`}
                style={fadeShapeBottom}>
                <div
                    className={`flex items-center justify-between py-8 ${
                        toggle ? 'flex-col' : ''
                    }`}>
                    <div className="flex items-center justify-between w-full md:w-max">
                        <div className="flex items-center justify-start">
                            <Image
                                src="/static/images/logo.svg"
                                alt="Logo"
                                width="34px"
                                height="34px"
                            />
                            <h4 className="ml-2 hidden md:inline">
                                OnlineTutors
                            </h4>
                        </div>
                        <button
                            type="button"
                            className="md:hidden focus:outline-none"
                            onClick={() => setToggle((prev) => !prev)}>
                            {toggle ? (
                                <UilMultiply size={32} color="#fff" />
                            ) : (
                                <UilBars size={32} />
                            )}
                        </button>
                    </div>
                    <div
                        className={`items-center flex-1 md:flex ${
                            toggle
                                ? 'flex flex-col justify-start w-full mt-8'
                                : 'hidden justify-between'
                        }`}>
                        <div
                            className={`flex items-center justify-start navigation ${
                                toggle ? 'flex-col w-full' : ''
                            }`}>
                            <Link href="/services">
                                <a
                                    className={`hover:text-white font-medium md:ml-16 py-2 ${
                                        toggle ? 'text-white mb-4' : ''
                                    }`}>
                                    Services
                                </a>
                            </Link>
                            <Link href="/tutors">
                                <a
                                    className={`hover:text-white font-medium md:ml-10 py-2 ${
                                        toggle ? 'text-white mb-4' : ''
                                    }`}>
                                    Our Tutors
                                </a>
                            </Link>
                            <Link href="/about">
                                <a
                                    className={`hover:text-white font-medium md:ml-10 py-2 ${
                                        toggle ? 'text-white mb-4' : ''
                                    }`}>
                                    About Us
                                </a>
                            </Link>
                            <Link href="/support">
                                <a
                                    className={`hover:text-white font-medium md:ml-10 py-2 ${
                                        toggle ? 'text-white mb-4' : ''
                                    }`}>
                                    Support
                                </a>
                            </Link>
                        </div>
                        <div
                            className={`flex items-center justify-end navigation ${
                                toggle ? 'flex-col w-full' : ''
                            }`}>
                            <Link href="/auth">
                                <a
                                    className={`md:mr-8 hover:text-white font-medium py-2 ${
                                        toggle ? 'text-white mb-4' : ''
                                    }`}>
                                    Join Us/Login
                                </a>
                            </Link>
                            <Button
                                type="button"
                                color={`${toggle ? 'white' : 'primary'}`}>
                                Start Learning
                            </Button>
                        </div>
                    </div>
                </div>
            </animated.div>
            <div className="md:container px-4 md:px-0 mx-auto h-screen grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-0 gap-16 items-start md:items-center justify-center">
                <div className="flex flex-col relative h-3/4 justify-center order-2 md:order-1 mt-16 md:mt-0">
                    <animated.div
                        className="rounded-full w-20 h-20 bg-pink-500 absolute md:-top-24 left-40 move-paral hidden md:block"
                        data-speed="-3"
                        style={fadeShapeBottom}></animated.div>
                    <animated.div
                        className="rounded-full w-10 h-10 bg-amber-500 absolute md:-top-10 left-10 move-paral hidden md:block"
                        data-speed="2"
                        style={justFade}></animated.div>
                    <animated.div style={fadeScale}>
                        <h1 className="text-center md:text-left">
                            Online School Platform For Students.
                        </h1>
                        <p className="text-lg text-black-300 mt-2 text-center md:text-left">
                            Best professional tutors to help students with their
                            lessons and push them towards graduation. With valid
                            certificates for finishing classes.
                        </p>
                        <div className="flex items-center justify-start mt-8">
                            <Button type="button" color="primary">
                                Start Learning
                            </Button>
                            <Link href="/how">
                                <a className="ml-6 py-3 px-8 rounded-full border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition duration-200 colors">
                                    How It Works?
                                </a>
                            </Link>
                        </div>
                    </animated.div>
                    <animated.img
                        src="/static/images/BottomShape.svg"
                        alt="QCircleIndigo"
                        width="110px"
                        height="100px"
                        id="qcirclebottom"
                        className="absolute md:-bottom-20 xl:-bottom-20 right-1/4 move-paral hidden md:block"
                        style={fadeShapeTop}
                        data-speed="3"
                    />
                </div>
                <animated.div
                    className="w-full h-full md:h-3/4 grid place-items-center relative order-1 md:order-2"
                    style={fadeBottom}>
                    <div
                        className="rounded-full w-64 h-64 xl:w-96 xl:h-96 bg-indigo-500 absolute -top-7 md:-top-10 xl:top-0 left-30 move-paral"
                        data-speed="3"></div>
                    <div
                        className="rounded-full w-40 h-40 md:w-48 md:h-48 xl:w-64 xl:h-64 bg-pink-500 absolute bottom-1/4 left-0 xl:left-20 move-paral"
                        data-speed="3"></div>
                    <img
                        src="/static/images/QCircle.svg"
                        alt="QCircle"
                        width="280px"
                        height="260px"
                        className="absolute bottom-1/3 md:bottom-1/3 xl:bottom-1/4 right-0 move-paral"
                        data-speed="3"
                        id="hero-qcircle"
                    />
                    <img
                        src="/static/images/girl.png"
                        width="420px"
                        height="500px"
                        alt="student"
                        className="z-40"
                        ref={heroImage}
                    />
                    <div
                        className="rounded-md bg-white shadow-md border border-black-100 px-4 py-10 md:py-14 absolute -bottom-20 md:bottom-4 left-0 w-full z-50 move-paral xl:w-3/4 xl:left-20 2xl:bottom-4 2xl:left-0 xl:-bottom-20 2xl:w-full"
                        data-speed="-3">
                        <h3 className="text-center text-indigo-500">
                            +2000 Hours of tutorials for all students.
                        </h3>
                    </div>
                </animated.div>
            </div>
            <div className="md:container px-2 md:px-0 mx-auto mt-40 md:mt-20">
                <h2 className="text-center w-full mb-8">
                    How we help students
                </h2>
                <VisibilitySensor partialVisibility offset={{ top: 30 }}>
                    {({ isVisible }) => (
                        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-8">
                            <Spring
                                delay={300}
                                to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? 'translateY(0px)'
                                        : 'translateY(60px)',
                                }}>
                                {({ opacity, transform }) => (
                                    <animated.div
                                        className="rounded-md shadow-md p-4 border border-black-100 pb-8"
                                        style={{ opacity, transform }}>
                                        <img
                                            src="/static/images/onlineclass.svg"
                                            alt="Online Class"
                                            width="100%"
                                            height="auto"
                                        />
                                        <h4 className="text-center">
                                            Online Classes
                                        </h4>
                                        <p className="text-center text-black-300">
                                            We provide online classes and video
                                            tutorials for students in all
                                            subjects.
                                        </p>
                                        <div className="flex justify-center">
                                            <Link href="/valid-certificate">
                                                <a className="flex items-center justify-center text-center mt-8 text-amber-500 card-link hover:text-white">
                                                    Learn More
                                                    <UilArrowRight className="ml-2" />
                                                </a>
                                            </Link>
                                        </div>
                                    </animated.div>
                                )}
                            </Spring>
                            <Spring
                                delay={400}
                                to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? 'translateY(0px)'
                                        : 'translateY(60px)',
                                }}>
                                {({ opacity, transform }) => (
                                    <animated.div
                                        className="rounded-md shadow-md p-4 border border-black-100 pb-8"
                                        style={{ opacity, transform }}>
                                        <img
                                            src="/static/images/graduation.svg"
                                            alt="Graduation"
                                            width="100%"
                                            height="auto"
                                        />
                                        <h4 className="text-center">
                                            Valid Certification
                                        </h4>
                                        <p className="text-center text-black-300">
                                            After students pass the final tests
                                            we give them valid certifications
                                            approving that they passed the
                                            subjects.
                                        </p>
                                        <div className="flex justify-center">
                                            <Link href="/valid-certificate">
                                                <a className="flex items-center justify-center text-center mt-8 text-amber-500 card-link hover:text-white">
                                                    Learn More
                                                    <UilArrowRight className="ml-2" />
                                                </a>
                                            </Link>
                                        </div>
                                    </animated.div>
                                )}
                            </Spring>
                            <Spring
                                delay={500}
                                to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? 'translateY(0px)'
                                        : 'translateY(60px)',
                                }}>
                                {({ opacity, transform }) => (
                                    <animated.div
                                        className="rounded-md shadow-md p-4 border border-black-100 pb-8"
                                        style={{ opacity, transform }}>
                                        <img
                                            src="/static/images/goodtutors.svg"
                                            alt="Online Tutors"
                                            width="100%"
                                            height="auto"
                                        />
                                        <h4 className="text-center">
                                            Experienced Tutors
                                        </h4>
                                        <p className="text-center text-black-300">
                                            Our tutors are experienced teachers
                                            and can help students learn any
                                            subject easily.
                                        </p>
                                        <div className="flex justify-center">
                                            <Link href="/valid-certificate">
                                                <a className="flex items-center justify-center text-center mt-8 text-amber-500 card-link hover:text-white">
                                                    Learn More
                                                    <UilArrowRight className="ml-2 inline" />
                                                </a>
                                            </Link>
                                        </div>
                                    </animated.div>
                                )}
                            </Spring>
                        </div>
                    )}
                </VisibilitySensor>
                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                        <Spring
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible
                                    ? 'scale(1)'
                                    : 'scale(0.1)',
                            }}>
                            {({ opacity, transform }) => (
                                <animated.div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-40 pb-8"
                                    style={{ opacity, transform }}>
                                    <div className="flex flex-col justify-center order-2 md:order-1">
                                        <h2 className="text-center md:text-left">
                                            Get a personal tutor
                                        </h2>
                                        <p className="text-black-300 w-full md:w-3/4 text-center md:text-left">
                                            If you want more teaching for
                                            yourself or your kids you can get a
                                            personal tutor and they will teach
                                            your kids in more details. You can
                                            get each personal tutor only for one
                                            subject.
                                        </p>
                                        <div className="flex justify-center md:justify-start">
                                            <Link href="/getpersonaltutor">
                                                <a className="mt-4 text-amber-500 inline w-max card-link hover:text-white">
                                                    Get A Personal Tutor{' '}
                                                    <UilArrowRight className="ml-2 inline" />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <img
                                        src="/static/images/personaltutor.svg"
                                        alt="Personal Tutor"
                                        width="100%"
                                        height="auto"
                                        className="order-1 md:order-2"
                                    />
                                </animated.div>
                            )}
                        </Spring>
                    )}
                </VisibilitySensor>
                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                        <Spring
                            to={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible
                                    ? 'scale(1)'
                                    : 'scale(0.1)',
                            }}>
                            {({ opacity, transform }) => (
                                <animated.div
                                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 pb-8"
                                    style={{ opacity, transform }}>
                                    <img
                                        src="/static/images/exhausted.svg"
                                        alt="Exhausted Student"
                                        width="100%"
                                        height="auto"
                                        className="order-1"
                                    />
                                    <div className="flex flex-col justify-center order-2">
                                        <h2 className="text-center md:text-left">
                                            No more struggle in solving
                                            problems.
                                        </h2>
                                        <p className="text-black-300 w-full md:w-3/4 text-center md:text-left">
                                            Our experienced teachers will help
                                            you solve any subject problems and
                                            pass any tests and get your
                                            confidence boost up. They have very
                                            easy to understand and efficient
                                            methods that can help you with any
                                            lesson or subject that you struggle
                                            with.
                                        </p>
                                        <div className="flex justify-center md:justify-start">
                                            <Link href="/getpersonaltutor">
                                                <a className="mt-4 text-amber-500 inline w-max card-link hover:text-white">
                                                    Learn More
                                                    <UilArrowRight className="ml-2 inline" />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </animated.div>
                            )}
                        </Spring>
                    )}
                </VisibilitySensor>
                <h2 className="text-center mt-20">Start Learning Now</h2>
                <h4 className="text-center text-black-300">Choose a plan</h4>
                <VisibilitySensor partialVisibility>
                    {({ isVisible }) => (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mt-8">
                            <Spring
                                delay={200}
                                to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? 'scale(1)'
                                        : 'scale(0.1)',
                                }}>
                                {({ opacity, transform }) => (
                                    <animated.div
                                        className="rounded-lg shadow-md p-8 border border-black-100"
                                        style={{ opacity, transform }}>
                                        <h3 className="text-center mb-8">
                                            Free Plan
                                        </h3>
                                        <p>
                                            Free access to all tests and answers
                                        </p>
                                        <p className="my-4">
                                            Only one free tutorial
                                        </p>
                                        <p>Only Insights</p>
                                        <h2 className="mt-16 text-center">
                                            Free
                                        </h2>
                                        <div className="flex justify-center mt-8">
                                            <Button
                                                type="button"
                                                color="border">
                                                Select Plan
                                            </Button>
                                        </div>
                                    </animated.div>
                                )}
                            </Spring>
                            <Spring
                                delay={350}
                                to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? 'scale(1)'
                                        : 'scale(0.1)',
                                }}>
                                {({ opacity, transform }) => (
                                    <animated.div
                                        className="rounded-lg shadow-lg p-8 border border-indigo-500"
                                        style={{ opacity, transform }}>
                                        <h3 className="text-center text-indigo-500 mb-8">
                                            Starter Plan
                                        </h3>
                                        <p>
                                            Free access to all tests and answers
                                        </p>
                                        <p className="my-4">
                                            One tutorial for each subject
                                        </p>
                                        <p>Insights and Analysis</p>
                                        <h2 className="mt-16 text-center">
                                            $20/Month
                                        </h2>
                                        <div className="flex justify-center mt-8">
                                            <Button
                                                type="button"
                                                color="primary">
                                                Select Plan
                                            </Button>
                                        </div>
                                    </animated.div>
                                )}
                            </Spring>
                            <Spring
                                delay={500}
                                to={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible
                                        ? 'scale(1)'
                                        : 'scale(0.1)',
                                }}>
                                {({ opacity, transform }) => (
                                    <animated.div
                                        className="rounded-lg shadow-md p-8 border border-black-100"
                                        style={{ opacity, transform }}>
                                        <h3 className="text-center mb-8">
                                            Premium Plan
                                        </h3>
                                        <p>
                                            Free access to all tests and answers
                                        </p>
                                        <p className="my-4">
                                            Access to all tutorials and lessons
                                        </p>
                                        <p>Insights and Analysis</p>
                                        <h2 className="mt-16 text-center">
                                            $45/Month
                                        </h2>
                                        <div className="flex justify-center mt-8">
                                            <Button
                                                type="button"
                                                color="border">
                                                Select Plan
                                            </Button>
                                        </div>
                                    </animated.div>
                                )}
                            </Spring>
                        </div>
                    )}
                </VisibilitySensor>
                <h3 className="text-center mt-16">Want a custom plan?</h3>
                <div className="flex justify-center mt-2">
                    <Link href="/support">
                        <a className="text-indigo-500">Contact Support</a>
                    </Link>
                </div>
            </div>
            <div className="py-20 mt-20 bg-black-500 text-white" ref={footer}>
                <div className="md:container mx-auto px-2 md:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="mb-20 md:mb-0">
                            <h2>OnlineTutors</h2>
                            <p>Online school platform for all students.</p>
                            <p className="flex items-center mt-8">
                                <UilEnvelope className="mr-2" />{' '}
                                arefeghbali067@outlook.com
                            </p>
                            <p className="flex items-center mt-4">
                                <UilPhone className="mr-2" /> +98904xxxxxxx
                            </p>
                        </div>
                        <div className="mb-20 md:mb-0">
                            <h4>Join Our Newsletter</h4>
                            <div className="flex items-center justify-between w-full p-4 bg-white rounded-lg focus:outline-none mt-4 w-3/4">
                                <input
                                    type="text"
                                    name="newsletter"
                                    placeholder="Your Email Address"
                                    className="focus:outline-none border-none flex-1 text-black-500 bg-transparent"
                                />
                                <span className="text-amber-500">
                                    Send Email
                                </span>
                            </div>
                        </div>
                        <div className="md:pl-8">
                            <h4>Useful Links</h4>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <Link href="/services">
                                    <a>Services</a>
                                </Link>
                                <Link href="/tutors">
                                    <a>Our Tutors</a>
                                </Link>
                                <Link href="/lessons">
                                    <a>Lessons & Subjects</a>
                                </Link>
                                <Link href="/support">
                                    <a>Support</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start mt-4">
                        <span>
                            All Rights Reserved - Designed By Aref Eghbali
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
