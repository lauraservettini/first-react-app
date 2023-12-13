import {CORE_CONCEPTS} from '../data.js';
import CoreConcept from './CoreConcept.jsx';
import Section from './Section.jsx';

export default function CoreConcepts () {
    return(
    <>
        <Section id="core-concepts" title="ore Concepts">
            <ul>
            { CORE_CONCEPTS.map((CORE_CONCEPT) => ( <CoreConcept key={CORE_CONCEPT.title} {...CORE_CONCEPT} />)) }
            </ul>
        </Section>
    </>);
}