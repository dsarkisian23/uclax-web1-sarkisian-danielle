import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <SingleEssay
                question={`Explain the difference between HTML, CSS and JavaScript.`}
            >
                <ul>
                    HTML is like the skeleton of the webpage, outlining where
                    everything goes and how the webpage is structured. CSS is
                    the decoration on the webpage, adding stylistic features
                    such as color, font size, and more. JavaScript allows the
                    webpage to be interactive, coding specific responses to
                    certain actions that the webpage visitor takes. For example,
                    you could use JavaScript to code that if you hover over a
                    button, the button changes color.
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between Git and Github?`}
            >
                <ul>
                    <li>
                        <b>Git</b> = tracking service allowing multiple
                        programmers to track changes that are made in a code
                    </li>
                    <li>
                        <b>GitHub</b> = online platform that stores repositories
                        of git
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between JQuery and React?`}
            >
                <ul>
                    Both are libraries of code, but JQuery uses html and
                    simplified DOM whereas React uses a virtual DOM. React is
                    great for UI, whereas JQuery is great for simplifying
                    complex code. React was originally founded by Facebook
                    developers.
                </ul>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
