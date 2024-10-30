import {SiExpress, SiMongodb, SiTypescript, SiRedux, SiArduino, SiCplusplus } from "react-icons/si";
import { FaReact, FaNodeJs, FaPython, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const createTag = (icon, color, tagName) => ({ label: icon, color, tagName });

const iconClassName = "inline-block w-11 h-11";

const projects = [
	{
		imgSrc: "/portfolio/images/relaxEDAI.png",
		title: "RelaxED AI",
		description:
			"Second place in best hardware hack at Hack the Hill II! Our project, RelaxED AI, was inspired by our experiences as STEM students constantly juggling busy schedules, often leading to academic stress. RelaxED AI directly helps students manage that stress by tracking stress-related metrics and providing a fine-tuned AI chatbot to offer guidance on managing and reducing stress.",
		tags: [
			createTag(
                <FaReact className={iconClassName} />,
                "bg-[#61dafb] text-zinc-50",
                "React"
            ),
            createTag(
                <SiMongodb className={iconClassName} />,
                "bg-[#47A248] text-zinc-50",
                "MongoDB"
            ),
            createTag(
                <SiTypescript className={iconClassName} />,
                "bg-[#3178C6] text-zinc-50",
                "TypeScript"
            ),
            createTag(
                <SiExpress className={iconClassName} />,
                "bg-[#000000] text-zinc-50",
                "Express"
            ),
            createTag(
                <FaPython className={iconClassName} />,
                "bg-[#3776AB] text-zinc-50",
                "Python"
            ),
		],
		projectLink: "https://devpost.com/software/relaxed-ai",
		codeLink: "https://github.com/MarcVidalCodes/HTH-RelaxEDAI",
	},
	{
		imgSrc: "/portfolio/images/terraSphere.png",
		title: "TerraSphere",
		description:
			"A project submitted to Terrahacks. TerraSphere encourages users to live an eco-friendly and sustainable lifestyle by rewarding users with points when they take photos of eco-friendly activities. Gain a streak when snapping pics multiple days in a row, which multiplies your score, further incentivizing users to be sustainable every day. Redeem points for cool eco-related rewards!",
		tags: [
			createTag(
				<FaReact className={iconClassName} />,
				"bg-[#017fa5] text-zinc-50",
				"React"
			),
			createTag(
                <RiTailwindCssFill className={iconClassName} />,
                "bg-[#38B2AC] text-zinc-50",
                "Tailwind"
            ),
            createTag(
                <SiRedux className={iconClassName} />,
                "bg-[#764ABC] text-zinc-50",
                "Redux"
            ),
		],
		projectLink: "https://devpost.com/software/terrasphere",
		codeLink: "https://github.com/MarcVidalCodes/TerraSphere",
	},
	{
		imgSrc: "/portfolio/images/armbot.jpg",
		title: "Arduino Armbot",
		description:
			"Designed the base and arms of the robot using CAD. Used Arduino electronics, servo motors, joysticks along with 3D printed parts to put together. Code written in C++ using Arduino.",
		tags: [
			createTag(
                <SiCplusplus className={iconClassName} />,
                "bg-[#00599C] text-zinc-50",
                "C++"
            ),
			createTag(
                <SiArduino className={iconClassName} />,
                "bg-[#00979D] text-zinc-50",
                "Arduino"
            ),
		],
		projectLink: "",
		codeLink: "https://github.com/Aneesh05/3DPrintedArmBot",
	},
	{
		imgSrc: "/portfolio/images/dice.jpg",
		title: "Arduino Dice",
		description:
			"Die created with Arduino, various electrical components, and 3d parts. Wave hand over infrared sensor to play a short jingle and start rolling sequence.",
		tags: [
			createTag(
                <SiCplusplus className={iconClassName} />,
                "bg-[#00599C] text-zinc-50",
                "C++"
            ),
			createTag(
                <SiArduino className={iconClassName} />,
                "bg-[#00979D] text-zinc-50",
                "Arduino"
            ),
		],
		projectLink: "",
		codeLink: "https://github.com/Aneesh05/3DPrintedDice",
	},
	{
		imgSrc: "/portfolio/images/lineFollow.jpg",
		title: "Line-Following Robot",
		description:
			"3-D printing Robot that follows a black line on a white surface. Designed with CAD and put together with arduino electronics, DC motors,ultrasonic sensors and more.",
		tags: [
			createTag(
                <SiCplusplus className={iconClassName} />,
                "bg-[#00599C] text-zinc-50",
                "C++"
            ),
			createTag(
                <SiArduino className={iconClassName} />,
                "bg-[#00979D] text-zinc-50",
                "Arduino"
            ),
		],
		projectLink: "",
		codeLink: "https://github.com/Aneesh05/LineFollowingRobot",
	},
	{
		imgSrc: "/portfolio/images/dancingRobot.jpg",
		title: "Dancing Robot",
		description:
			"3D printed robot that dances to Star Wars Imperial March. Designed with CAD and put together with arduino electronics, servo motors as well as an ultrasonic sensor.",
		tags: [
			createTag(
                <SiCplusplus className={iconClassName} />,
                "bg-[#00599C] text-zinc-50",
                "C++"
            ),
			createTag(
                <SiArduino className={iconClassName} />,
                "bg-[#00979D] text-zinc-50",
                "Arduino"
            ),
		],
		projectLink: "https://youtu.be/aPNmQgB2trs?si=tVEZ-fX26bTFSjDW",
		codeLink: "",
	},
];

export default projects;
