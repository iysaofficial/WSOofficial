function Category() {  
    return (
      <>
      <section className="category-section" id="category">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase mb-5 fw-bold">Subject</h2>
                    {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                </div>
                <div className="row text-center">

                    <div className="cat-item col-md-4 col-lg-3 mb-lg-0 mb-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-calculator fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Mathematics</h4>
                        <a>for elementary, junior high, senior high and university levels</a>
                    </div>

                    <div className="cat-item col-md-4 col-lg-3 mb-lg-0 mb-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-atom fa-stack-1x fa-inverse"></i>

                        </span>
                        <h4 className="my-3">Physics</h4>
                        <a>for senior high school and university levels</a>
                    </div>

                    <div className="cat-item col-md-4 col-lg-3 mb-lg-0 mb-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-flask fa-stack-1x fa-inverse"></i>
                            
                        </span>
                        <h4 className="my-3">Chemistry</h4>
                        <a>for senior high school and university levels</a>
                    </div>

                    <div className="cat-item col-md-4 col-lg-3 mb-lg-0 mb-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-dna fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3">Biology</h4>
                        <a>for senior high school and university levels</a>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
  
  export default Category