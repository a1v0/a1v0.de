import React from "react";
import styles from "./LogoLink.module.css";

export default function LogoLink() {
    return (
        <a href="/">
            <div className="mr-2.5 inline-block rounded-bl-2xl rounded-br rounded-tl rounded-tr-2xl bg-accent-colour p-2.5 transition-all duration-500 ease-in-out hover:rounded-bl hover:rounded-br-2xl hover:rounded-tl-2xl hover:rounded-tr">
                <svg
                    viewBox="114 40.26 9.65 13.16" // calculated using https://codepen.io/mkmllr/pen/vpJmEK
                    style={{ height: "1.5rem" }}
                    className="fill-softer-black"
                >
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            stroke: "none",
                            fillRule: "nonzero",
                            fillOpacity: 1
                        }}
                        d="M 123.652344 51.472656 L 123.261719 51.160156 L 122.792969 51.394531 C 122.558594 51.316406 122.324219 51.082031 122.207031 50.847656 C 122.207031 50.691406 122.128906 50.496094 122.128906 50.300781 C 122.128906 50.261719 122.167969 50.144531 122.167969 50.105469 L 122.167969 42.996094 C 122.441406 42.292969 122.714844 41.628906 123.144531 41.042969 L 123.027344 41.042969 C 122.675781 41.042969 122.167969 41.394531 122.011719 41.628906 L 118.496094 40.261719 C 117.714844 41.042969 116.621094 41.472656 115.566406 41.472656 C 115.488281 41.472656 115.332031 41.433594 115.214844 41.433594 L 116.503906 45.066406 C 115.214844 46.042969 114.355469 47.839844 114.082031 49.363281 C 114.082031 49.558594 114.003906 49.832031 114.003906 50.027344 C 114.003906 51.394531 114.902344 52.644531 116.152344 53.425781 L 119.589844 50.457031 C 119.589844 50.652344 119.667969 50.808594 119.667969 51.003906 C 119.667969 51.707031 120.253906 53.425781 121.191406 53.425781 L 121.347656 53.425781 Z M 119.589844 46.394531 L 117.050781 44.910156 L 116.035156 42.058594 L 116.347656 42.058594 L 119.589844 43.347656 Z M 119.667969 49.714844 L 117.832031 51.355469 L 117.519531 51.472656 C 116.855469 50.574219 116.230469 49.207031 116.230469 47.917969 C 116.230469 47.097656 116.503906 46.277344 117.050781 45.613281 L 119.667969 47.175781 Z M 119.667969 49.714844"
                    />
                </svg>
            </div>
            a1v0.de
        </a>
    );
}
