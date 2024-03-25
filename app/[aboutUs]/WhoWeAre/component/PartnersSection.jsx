"use client";
import React from "react";
import { Box, Grid, Typography, Paper, Stack, Container } from "@mui/material";
import Image from "next/image";

const PartnerList = [
  {
    name: "Beyond the Horizon",
    description:
      "Beyond the Horizon International Strategic Studies Group (BtH) is an independent next-generation think & do tank in Belgium that aims to promote glocal (global & local) peace and security by its strong in-house capacity and extensive network of partners throughout the world.  BtH empowers practitioners and decisionmakers with data-driven & evidence-based research and analysis; keeps a watchful eye on the globe to bring emerging critical issues to the attention of professionals and the public; and serves as a forum for debate by organising different kinds of events. It also provides world-class training and consultancy services, develops and employs innovative and sustainable solutions by making a combination of research, innovation and action projects; as well as transforms its deliverables into data-driven products.     ",
    logo: "/images/logo1.png",
    width: 400, 
    height: 158 , 
    reverse: false,
  },
  {
    name: "Hybrid Core",
    description:
"Hybrid Core is a Belgian deep technology and consultancy company which empowers trusted strategic and digital transformation, ensures digital sovereignty, and provides innovative solutions in complex and data-rich hyper-connected environments. Hybrid Core has a sophisticated cross-functional human-machine team consisting of high-level experts who have experience in multinational global projects at NATO, EU, UN, and the corporate world, and extensive knowledge mainly in security sector reform and transformation, enhanced digitalisation, hybrid intelligence (symbiosis of humans and machines), strategic foresight, AI-powered predictions & red teaming, and dynamic ",
    logo: "/images/logo2.png",
    width: 538, 
    height: 359, 
    reverse: true,
  },
  {
    name: "The Institute for Security and Development Policy",
    description:
      "The Institute for Security and Development Policy (ISDP) is a Stockholm-based non-profit and non-partisan research and policy organisation. It is dedicated to expanding understanding of international affairs, focusing on the inter-relationship between security, conflict, and development. The Institute strongly believes in ethnic diversity, gender equality, and religious and political freedom and firmly stands for it in all aspects of its work. ISDP presently has two major geographic areas of focus as The Asia Program and The Silk Road Studies Program. ",
    logo: "/images/logo3.png",
    width: 441, 
    height: 131, 
    reverse: false,
  },
  {
    name: "The Prague University of Econocs and Business",
    description:
      "The Prague University of Economics and Business (VŠE), founded in 1953, is the largest public university in the field of economics and business in the Czech Republic. VŠE has six faculties offering applicants a broad spectrum of bachelor, master, PhD and MBA study programmes. Five faculties are located in the centre of Prague – the Faculty of Finance and Accounting, the Faculty of International Relations, the Faculty of Business Administration, the Faculty of Informatics and Statistics and the Faculty of Economics.   ",
    logo: "/images/logo5.png",
    width: 400, 
    height: 200, 
    reverse: false,
  },
  {
    name: "Puprecht Karl University of Heidelberg",
    description:
      "Heidelberg University (UHEI), founded in 1386, is Germany’s oldest university and one of the strongest research universities in all of Europe. The successes in both rounds of the Excellence Initiative and in internationally recognised rankings prove that Heidelberg’s excellent reputation and leading role in the scientific community are well deserved. In terms of educating students and promoting promising early-career academics, Heidelberg relies on research-based teaching and an outstanding, well-structured training for doctoral candidates. Etiam porta sem malesuada magna mollis euismod...",
    logo: "/images/logo4.png",
    width: 230, 
    height: 120, 
    reverse: true,
  },
  {
    name: "The Jagiellonian University",
    description:
      "The Jagiellonian University (JU) is the oldest higher education institution in Poland and one of the oldest in Europe. It was founded on 12 May 1364 by the Polish king Casimir the Great. The Jubilee year 2014 marked the 650th anniversary of this remarkable event. The Jagiellonian University comprises 16 Faculties, where nearly 4 thousand academic staff conduct research and provide education to almost 40 thousand students, within the framework of more than 150 different fields of study. Eminent researchers and state-of-the-art infrastructure make the JU one of the leading Polish scientific institutions, collaborating with major academic centres from all over the world.      ",
    logo: "/images/logo6.png",
    width: 261, 
    height: 111, 
    reverse: true,
  },
  {
    name: "The University of Warwick",
    description:
      "The University of Warwick is a public research university of the UK. The university was founded in 1965 as part of a government initiative to expand higher education. University of Warwick (UW) is in top 10 universities in the UK and in top 100 globally. It is one of the UK's leading research universities and the quality and impact of the research is reflected in their rankings. ",
    logo: "/images/logo7.png",
    width: 191.8, 
    height: 127.5, 
    reverse: false,
  },
  {
    name: "Chatham House",
    description:
      "The Jagiellonian University (JU) is the oldest higher education institution in Poland and one of the oldest in Europe. It was founded on 12 May 1364 by the Polish king Casimir the Great. The Jubilee year 2014 marked the 650th anniversary of this remarkable event. The Jagiellonian University comprises 16 Faculties, where nearly 4 thousand academic staff conduct research and provide education to almost 40 thousand students, within the framework of more than 150 different fields of study. Eminent researchers and state-of-the-art infrastructure make the JU one of the leading Polish scientific institutions, collaborating with major academic centres from all over the world.   ",
    logo: "/images/logo8.png",
    width: 275, 
    height: 75, 
    reverse: true,
  },
];

const PartnersSection = () => {
  return (
    <Container sx={{ flexGrow: 1, my: 4, p: 4 }}>
      {PartnerList.map((partner, index) => (
        <Grid
          container
          key={partner.name}
          spacing={2}
          direction={index % 2 === 0 ? "row" : "row-reverse"}
          alignItems="center"
          sx={{ mb: 10 }} 
        >
          <Grid item xs={12} md={6} sx={{
            display: 'flex',
            justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
          }}>
            <Box sx={{
              maxWidth: partner.width, 
              maxHeight: partner.height, 
              p: 2,
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center',
              width: '100%',
            }}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                layout="responsive"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ m: 2 }}>
              <Typography variant="h6">{partner.name}</Typography>
              <Typography variant="body2">{partner.description}</Typography>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};

export default PartnersSection;
