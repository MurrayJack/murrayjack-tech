import React from "react"
import MurrayJack from "./images/MurrayJack"
import { FiMail, FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi"
import { motion, AnimateSharedLayout } from "framer-motion"
import { useState } from "react"
import { HStack, VStack } from "./Stack"

export const MyImage = ({ data }) => {
    const [socialItem, setSocialItem] = useState("")
    let timeout

    const handleOnMouseDeBounce = () => {
        timeout = setTimeout(() => {
            setSocialItem("")
        }, 10)
    }

    return (
        <AnimateSharedLayout>
            <div
                onPointerOutCapture={handleOnMouseDeBounce}
                style={{ width: "300px", paddingTop: "10px" }}
            >
                <VStack gap="small" justify="center">
                    <div style={{ position: "relative" }}>
                        <MurrayJack />
                        {socialItem === "" && (
                            <motion.div
                                layoutId="outline"
                                className="outline"
                                initial={false}
                                transition={spring}
                                animate={{ borderColor: "#cc5500" }}
                            ></motion.div>
                        )}
                    </div>

                    <HStack gap="small" onPointerOver={() => clearTimeout(timeout)}>
                        <div>
                            <SocialItem
                                href={
                                    "mailto:" + data.sanityPersonalDetails.email
                                }
                                label="Email Me"
                                onHover={() => setSocialItem("Email Me")}
                                selected={socialItem}
                                icon={() => <FiMail />}
                            />
                        </div>
                        <div>
                            <SocialItem
                                rel="noopener noreferrer"
                                target="_blank"
                                href={data.sanityPersonalDetails.twitter}
                                label="Link to twitter"
                                onHover={() => setSocialItem("Link to twitter")}
                                selected={socialItem}
                                icon={() => <FiTwitter />}
                            />
                        </div>
                        <div>
                            <SocialItem
                                rel="noopener noreferrer"
                                target="_blank"
                                href={data.sanityPersonalDetails.github}
                                label="Link to GitHub"
                                onHover={() => setSocialItem("Link to GitHub")}
                                selected={socialItem}
                                icon={() => <FiGithub />}
                            />
                        </div>
                        <div>
                            <SocialItem
                                rel="noopener noreferrer"
                                target="_blank"
                                href={data.sanityPersonalDetails.linkedIn}
                                label="Linked In"
                                onHover={() => setSocialItem("Linked In")}
                                selected={socialItem}
                                icon={() => <FiLinkedin />}
                            />
                        </div>
                    </HStack>
                </VStack>
            </div>
        </AnimateSharedLayout>
    )
}

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
}

const SocialItem = ({ href, label, icon, selected, onHover, ...rest }) => (
    <>
        <a {...rest} href={href} aria-label={label} onPointerOver={onHover}>
            {icon()}
            {selected === label && (
                <motion.div
                    layoutId="outline"
                    className="outline"
                    initial={false}
                    transition={spring}
                    // animate={{ borderColor: "#fff" }}
                ></motion.div>
            )}
        </a>

        <style jsx>{`
            a {
                height: 40px;
                width: 40px;
                display: grid;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                // background: var(--main-color2);
                position: relative;
                transition: background-color linear 0.4s;
            }

            a:hover {
                background: var(--main-accent-color);
                transition: background-color linear 0.2s;
                color: white;
            }
        `}</style>
    </>
)
