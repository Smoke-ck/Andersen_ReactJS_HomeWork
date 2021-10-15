import "./Sample.css"

function Sample({ state }) {
    const { name, surname, phone, date, web, about, stack, project } = { ...state };
    return (
        <div className="sampleContainer">
            <div className='sample'>
                <div className="sampleContent sampleTittle">
                    <h1 className="sampleHeader"> {`${name} ${surname}`}</h1>
                </div>
                <h2>Данные:</h2>
                <div className="sampleContent sampleContact">
                    <p>тел: {phone}</p>
                    <p>дата: {date}</p>
                    <p>web: {web}</p>
                </div>
                <div className="sampleContent sampleDescription">
                    <h2>О себе:</h2>
                    <div className="sampleDescriptionAbout"><p>{about}</p></div>
                    <h2>Описание последнего проекта:</h2>
                    <div className="sampleDescriptionAbout"><p>{project}</p></div>
                    <h2>Стек технологий</h2>
                    <div className="sampleDescriptionAbout"> <p>{stack}</p></div>
                </div>
            </div>
        </div>
    )
}

export default Sample;