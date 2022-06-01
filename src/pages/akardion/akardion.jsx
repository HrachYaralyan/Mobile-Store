import React from "react";
import s from "./akardion.module.scss";
import { BiArrowFromRight } from "react-icons/bi";
import { BiArrowFromTop } from "react-icons/bi";
import { useState } from "react";
import ClickAkardion from "./akardionFunctional";



// Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American business magnate, industrial designer, media proprietor, and investor. He was the co-founder, chairman, and CEO of Apple; the chairman and majority shareholder of Pixar; a member of The Walt Disney Company's board of directors following its acquisition of Pixar; and the founder, chairman, and CEO of NeXT. He is widely recognized as a pioneer of the personal computer revolution of the 1970s and 1980s, along with his early business partner and fellow Apple co-founder Steve Wozniak.

const starttext = [
  {
    text: `Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American business magnate, industrial designer, media proprietor, and investor. He was the co-founder, chairman, and CEO of Apple; the chairman and majority shareholder of Pixar; a member of The Walt Disney Company's board of directors following its acquisition of Pixar; and the founder, chairman, and CEO of NeXT. He is widely recognized as a pioneer of the personal computer revolution of the 1970s and 1980s, along with his early business partner and fellow Apple co-founder Steve Wozniak.`
  },
  {
    text: `Childhood Paul Jobs worked in several jobs that included a try as a machinist,[21] several other jobs,[22] and then back to work as a machinist.Paul and Clara adopted Jobs's sister Patricia in 1957[23] and by 1959 the family had moved to the Monta Loma neighborhood in Mountain View, California.[24] It was during this time that Paul built a workbench in his garage for his son in order to pass along his love of mechanics.[25] Jobs, meanwhile, admired his father's craftsmanship because he knew how to build anything. If we needed a cabinet, he would build it. When he built our fence, he gave me a hammer so I could work with him ... I wasn't that into fixing cars ... but I was eager to hang out with my dad`,
  },
  {
    text: `Apple (1976–1985) By March 1976, Wozniak completed the basic design of the Apple I computer and showed it to Jobs, who suggested that they sell it; Wozniak was at first skeptical of the idea but later agreed.[66] In April of that same year, Jobs, Wozniak, and administrative overseer Ronald Wayne founded Apple Computer Company (now called Apple Inc.) as a business partnership in Jobs's parents' Crist Drive home on April 1, 1976.`
  },
  {
    text: `Return to Apple In 1996, Apple announced that it would buy NeXT for $427 million. The deal was finalized in February 1997,[138] bringing Jobs back to the company he had cofounded. Jobs became de facto chief after then-CEO Gil Amelio was ousted in July 1997. He was formally named interim chief executive on September 16.[139] In March 1998, to concentrate Apple's efforts on returning to profitability, Jobs terminated a number of projects, such as Newton, Cyberdog, and OpenDoc.`
  },
  {
    text: `Death Jobs died at his Palo Alto, California home around 3 p.m. (PDT) on October 5, 2011, due to complications from a relapse of his previously treated islet-cell pancreatic neuroendocrine tumor,[14][206][207] which resulted in respiratory arrest.[208] He had lost consciousness the day before and died with his wife, children, and sisters at his side.[209] His sister, Mona Simpson, described his death thus:`
  }
];



export default function Akardion() {




  return (
    <>
      <div className={s.jobs}>
        <h1 className={s.h1}>Leadership Apple Steve Jobs</h1>
        {starttext.map((elem) => {
          return (
            <>
              <div className={s.big}>
                <div> <ClickAkardion elem={elem} /> </div>
              </div>

            </>
          )
        })}
      </div>
    </>
  )
}
