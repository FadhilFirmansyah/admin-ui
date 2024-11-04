const Card = (props) => {
    const { type, title, content } = props;
    return(
        <>
        {type == "balance" || type == "dashboard" ? (
            <>
            <div className="text-lg text-gray-02 mb-2">Title</div>
            <div className="bg-white rounded-lg px-6 py-5 shadow-xl mb-6 pb-10">Description</div>
            </>
        ): type == "expenses" ? (
            <>
            <div className="text-lg text-gray-02">{title}</div>
            <div className="bg-white rounded-lg px-6 py-5 shadow-xl mb-2">{content}</div>
            </>
        ): null}
        </>
    );
};

export default Card;