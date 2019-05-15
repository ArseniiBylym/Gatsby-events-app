import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import {FaGooglePlusG, FaFacebookF, FaViber } from 'react-icons/fa';
import { useStaticQuery, graphql } from 'gatsby';
import Footer from '../components/footer';

const AboutWrapper = styled.div`
    width: 100%;
    min-height: 100%;
    background: linear-gradient(45deg, #5DBFC0, #084A5A, #051924);
    padding: 0 3rem;
    h1 {
        padding-top: 150px;
        text-align: center;
        color: white;
    }
    p {
        color: white;
    }
    .socials{
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-evenly;
        font-size: 1.2rem;
        a {
            color: white;
            &:hover{
                color: gray;
            }
        }
    }
`;

const About = () => {
    const data = useStaticQuery(graphql`
        query AboutQuery{
           site {
                siteMetadata {
                   company {
                       email
                       facebook
                       viber
                   }
                }
            }
        }
    `);
    const {email, facebook, viber} = data.site.siteMetadata.company;
    return (
        <Layout>
            <AboutWrapper>
                <h1>About us</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus ullam blanditiis illo rem asperiores iste ab corporis ea possimus? Molestias dolor facilis, rerum iure magnam, quaerat iusto officiis neque commodi nam explicabo praesentium maxime a dolorum cum placeat, hic quo? Natus similique est error aperiam eius numquam, facere dolorem, odio eos maiores atque, vel voluptatibus ullam vero aut a ab aliquid omnis nostrum excepturi beatae ea quibusdam rem! Id, distinctio recusandae ullam placeat molestiae ipsum dolore saepe quibusdam veniam facilis amet. Nulla, velit. Voluptatibus non incidunt vero officiis animi. Temporibus fugiat sint quisquam voluptate assumenda pariatur expedita ex voluptatem consectetur dolorem perferendis numquam molestiae, veniam fugit necessitatibus blanditiis, vel odio, non quo aliquid hic ut qui! Aliquid ipsa pariatur odit repudiandae? Eius accusantium saepe illo et vero, corrupti odit itaque, deleniti aliquam quisquam voluptatibus dignissimos magni, nemo enim similique error neque perferendis quam alias ipsa. Quasi perferendis ut commodi, ipsa id accusamus cum ad nam debitis, suscipit similique placeat mollitia in vero! Reprehenderit corrupti dolorum odit, doloribus a eum dignissimos ullam maiores perspiciatis necessitatibus illum nemo deserunt accusantium dolorem expedita adipisci exercitationem, unde veritatis harum sed. Quaerat aliquam laudantium excepturi hic consectetur, aliquid assumenda perferendis, autem odit ducimus saepe ea voluptas deserunt inventore! Ratione aliquid eius animi sit perspiciatis et, excepturi fugit! Ut commodi voluptate mollitia ipsa ipsam neque deserunt. Laboriosam in ullam dolores ipsum ducimus animi iste ea, commodi placeat natus esse. Maxime in molestias earum ut eum possimus commodi, totam ea labore, numquam consectetur eaque libero. Assumenda amet laborum quos beatae deserunt, rem nesciunt quod ut tempora numquam culpa nostrum voluptatibus, excepturi ducimus quibusdam aliquid placeat vitae autem doloribus delectus! Nostrum similique dicta architecto nam dolores eos repudiandae corrupti atque magni mollitia laudantium, incidunt tempore sit repellendus alias. Consectetur rem architecto earum necessitatibus. Corrupti laudantium voluptate cumque pariatur quibusdam, quae illum soluta eius quaerat, iure eaque nostrum omnis eos repellendus dolorum ratione ad, reiciendis explicabo? Quas ratione quis error ex! Aliquam voluptatem ullam repellat quos iure unde blanditiis culpa illo eaque debitis! Quis, tenetur alias minus voluptatibus dicta cupiditate facilis rem omnis consequuntur commodi dolore ea laborum suscipit? Hic quas, minus dignissimos eaque ad amet numquam autem soluta et a rem expedita tenetur dolor sapiente quaerat laudantium ipsum non nobis architecto ut molestias, quis dolorum aspernatur? Voluptas laboriosam exercitationem dolore tenetur iure animi totam! Sed perspiciatis odit ea sapiente corrupti a esse nihil maiores, ex tempora mollitia commodi reiciendis vero repellendus libero non voluptatum omnis, quaerat placeat? Recusandae maxime sint nam autem, incidunt adipisci nemo voluptatem a aliquam explicabo ex itaque, impedit ratione. Reprehenderit repudiandae temporibus, cumque excepturi autem eius, nostrum esse, neque id aut quaerat omnis fuga ex recusandae. Praesentium tempore repellat, cumque doloremque unde minus exercitationem modi iure quas veniam ex in reiciendis at molestiae illo ratione. Iste mollitia quas vel sint omnis totam deleniti, voluptas harum corporis facilis aliquid, illo impedit laboriosam doloremque quae, obcaecati nobis dolor adipisci accusantium unde libero veniam id architecto! Dolorum vero, saepe dignissimos assumenda excepturi non modi incidunt omnis.</p>
                <div className="socials">
                    <a href={`mailto:${email}`}><FaGooglePlusG/></a>
                    <a href={facebook}><FaFacebookF/></a>
                    <a href={`tel:${viber}`}><FaViber/></a>
                </div>
                <Footer />
            </AboutWrapper>
        </Layout>
    )
}

export default About;