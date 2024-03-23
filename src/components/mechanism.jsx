function Mechanism() {
  
    return (
      <>
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>Competition Mechanism</h1>
        <a href="/">Home</a>
      </div>
    {/* PAGE HEADER END */}
      <section className="mechanism-section" id="mechanism">
            <div className="container">
                <div className="items">
                    <h1 className="text-center">Competition Mechanism</h1>
                    <div className="participant col-10 mb-5 mx-auto">
                        <h4 className="text-center">Online Mechanism</h4>
                        <ul>
                            <li>This competition is a 2-person team competition held online.</li>
                            <li>All teams will participate in the first round which is held online and in real time following the western Indonesian time zone or WIB (Jakarta Time).</li>
                            <li>The competition is divided into 2 rounds.</li>
                        </ul>
                    </div>
                    <div className="assessment row">
                        <div className="round1 mb-5 me-lg-5 col-12 col-lg-5 mx-auto">
                            <h4 className="text-center">Round 1</h4>
                            <ul>
                                <li>The first round contained multiple-choice questions that all participants took part in.</li>
                                <li>The first round contained multiple-choice questions that all participants took part in.</li>
                                <li>60% of the participants with the best scores in the first round are eligible to continue the competition in the second round.</li>
                                <li>The 40% participants with the lowest score will receive an "Honorable Mention" certificate.</li>
                            </ul>
                        </div>
                        <div className="round2 col-12 col-lg-5 mx-auto">
                            <h4 className="text-center">Round 2</h4>
                            <ul>
                                <li>The second round of questions consisted of multiple choice questions</li>
                                <li>Participants in the second round will compete for the rankings:
                                    <ul>
                                        <li>KKM &gt; 80: Will get a Gold Medal</li>
                                        <li>KKM 70 - 79: Will get Silver Medal</li>
                                        <li>KKM &lt; 69: Will get a bronze medal</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
  
  export default Mechanism