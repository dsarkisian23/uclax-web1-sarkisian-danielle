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
            <SingleEssay
                question={`What is the difference between a Front-End and Back-End Developer?`}
            >
                <ul>
                    <li>
                        <b>Front-end</b> = implement design and UX/UI — what the
                        users see such as buttons, text, images
                    </li>
                    <li>
                        <b>Back-end</b> = implement how data is stored and
                        structure of application
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                <ul>
                    <li>
                        <b>Root Relative</b> = doesn’t include domain name,
                        subdomain name, or extension — comes from the
                        site/domain (is writing links from the root of the
                        folder or domain), it assumes that it will always come
                        from root directory
                    </li>
                    <li>
                        <b>Document Relative</b> = uses document and file names,
                        when using ./ looking in same directory, if ../ going up
                        a directory and if you continue the pattern each time it
                        would go up a directory, adjust based on where files are
                        located
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`What is the difference between jpg, gif, png and svg images?`}
            >
                <ul>
                    <li>
                        <b>jpg</b> = joint photographic experts group, digital
                        photography, small file size, large choice in colors
                    </li>
                    <li>
                        <b>gif</b> = graphic interchange format, best for
                        animated graphics with less colors, transparency on/off
                    </li>
                    <li>
                        <b>png</b> = portable network graphic, better quality
                        image, lots of colors, large file size, support
                        transparent backgrounds, preferred for graphic design,
                        meant to be best of both worlds (jpg and gif)
                    </li>
                    <li>
                        <b>svg</b> = scalable vector graphics, uses math and
                        coordinates to scale image, best used for logos or
                        geometric images (not photographs with lots of colors)
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Define the following Agile roles: Product Manager, Product Owner, Business Analyst, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps`}
            >
                <ul>
                    <li>
                        <b>Product Manager</b> = cross-functional team leader
                        that sets product vision and strategy, bringing product
                        closer to business goals
                    </li>
                    <li>
                        <b>Product Owner</b> = leads product team in setting and
                        reaching product goals
                    </li>
                    <li>
                        <b>Business Analyst</b> = uses business analytics to
                        support product manager in creating strategy, and
                        reviews the results of each sprint
                    </li>
                    <li>
                        <b>Scrum Master</b> = makes sure everyone follows scrum
                        method
                    </li>
                    <li>
                        <b>UX Designer</b> = user research, user personas, site
                        map, information architecture, user interface,
                        wireframing, prototyping, usability testing
                    </li>
                    <li>
                        <b>Developer/Engineer</b> = turns the prototype into
                        functional application (both front-end and back-end)
                    </li>
                    <li>
                        <b>QA/SDET</b> = test quality assurance to make sure
                        product is good to go before launch to consumers
                    </li>
                    <li>
                        <b>DevOps</b> = mix of software engineering and
                        operations, making sure that engineers are efficient and
                        product software data is organized properly
                    </li>
                </ul>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
