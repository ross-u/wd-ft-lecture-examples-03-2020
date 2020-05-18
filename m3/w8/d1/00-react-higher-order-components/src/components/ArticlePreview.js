import React, { Component } from 'react';
import Higher from './../hoc/Higher';


class ArticlePreview extends Component {
  state = {
    title: undefined,
    description: undefined,
    content: undefined
  }

  componentDidMount() {
    const { title, description } = this.props;
    this.setState({ title, description });
  }


  loadMore = () => {
    const pr = this.props.getData();
    pr
      .then((response) => {
        console.log('response.data', response.data.value)
        this.setState({ content: response.data.value })
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className={this.props.mode === 'dark' ? "article-preview dark" : "article-preview"}>

        <h3>{this.state.title ? this.state.title : null}</h3>
        <p>{this.state.description ? this.state.description : null}</p>

        {
          this.state.content
            ? <p>{this.state.content}</p>
            : <div className="fade"> <button onClick={this.loadMore} className="btn-more">More</button> </div>
        }
      </div>
    )
  }
}

// const EnhancedArticlePreview =  Higher( ArticlePreview );
// export default EnhancedArticlePreview;

export default Higher(ArticlePreview);



