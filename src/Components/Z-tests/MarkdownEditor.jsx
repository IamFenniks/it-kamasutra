import React from "react";

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.md = new Remarkable();
        this.handleCange = this.handleCange.bind(this);
        this.state = { value: 'Привет **Мир**!' };
    }

    handleCange(e) {
        this.setState({ value: e.target.value });
    }
    getRowMarkup() {
        return { __hrml: this.md.render(this.state.value) };
    }

    render() {
        return (
            <div>
                <h4>Редактор</h4>
                <label htmlFor="markdown-content">Введите что-нибудь</label>
                <textarea id="markdown-content" onChange={this.handleCange} defaultValue={this.state.value} />

                <h4>Вывод:</h4>
                <div className="content" dangerouslySetInnerHTML={this.getRowMarkup()}></div>
            </div>
        );
    }
}

export default MarkdownEditor;