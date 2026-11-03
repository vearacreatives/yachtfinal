import socialImage from './assets/home/section1_banner.jpg';
import { pageMetadata } from './lib/seo.mjs';


//Css
import Section1 from './home_component/Section1';
import Section10 from './home_component/Section10';
import Section12 from './home_component/Section12';
import Section2 from './home_component/Section2';
import Section3 from './home_component/Section3';
import Section4 from './home_component/Section4';
import Section5 from './home_component/Section5';
import Section6 from './home_component/Section6';
import Section7 from './home_component/Section7';
import Section8 from './home_component/Section8';
import Section9 from './home_component/Section9';
import './styles/home/home.css'

//Canonical Tag
export const metadata = pageMetadata({"title": "Private Yacht Rentals in Goa | Yacht Club Goa", "description": "Plan a private yacht experience in Goa. Explore the fleet for birthdays, proposals, sunset outings and group celebrations. Contact us for a tailored quote.", "path": "/", image: socialImage});

export default function Home() {
  return (
    <>
    {/* Section 1 */}
    <Section1/>
    {/* End of Section 1 */}

    {/* Section 2 */}
    <Section2/>
    {/* End of Section 2 */}

    {/* Section 3 */}
    <Section3/>
    {/* End of Section 3 */}

    {/* Section 4 */}
    <Section4/>
    {/* End of Section 4 */}

    {/* Section 5 */}
    <Section5/>
    {/* End of Section 5 */}

    {/* Section 6 */}
    <Section6/>
    {/* End of Section 6 */}

    {/* Secction 7 */}
    <Section7/>
    {/* End of Section 7 */}

    {/* Section 8 */}
    <Section8/>
    {/* End of Section 8 */}

    {/* Section 9 */}
    <Section9/>
    {/* End of Section 9 */}

    {/* Section 10 */}
    <Section10/>
    {/* End of Section 10 */}


    {/* Section 12 */}
    <Section12/>
    {/* End of Section 12 */}

    </>
  );
}
