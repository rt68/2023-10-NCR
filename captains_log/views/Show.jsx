const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout')
class Show extends React.Component {
    render() {
        const { log } = this.props;

        return (
            <DefaultLayout>
                <article>
                    <h2>{log.title}</h2>
                    <p>{log.entry}</p>
                    <p>Ship is {log.shipIsBroken ? 'broken' : 'not broken'}.</p>
                    {/* {log.createdAt && <p>Created At: {new Date(log.createdAt).toLocaleString()}</p>} */}
                    {<p>Created At:{log.createdAt.toLocaleString()}</p>}
                    {<p>Updated At:{log.updatedAt.toLocaleString()}</p>}
                    {/* {log.updatedAt && <p>Updated At: {new Date(log.updatedAt).toLocaleString()}</p>} */}
                    <a href={`/logs/${log._id}/edit`}>Edit</a>
                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete" />
                    </form>
                    <a href="/logs">Back to Log Entries</a>
                    {/* Comment Section */}
                    <div className="comments-section">
                        <h3>Comments</h3>
                        {log.comments && log.comments.length > 0 ? (
                            <ul>
                                {log.comments.map((comment, index) => (
                                    <li key={index}>
                                        <strong>{comment.name} ({comment.username}):</strong> {comment.text}
                                        <br />
                                        <small>Posted on {new Date(comment.createdAt).toLocaleString()}</small>
                                    </li>
                                ))}
                            </ul>
                        ) : <p>No comments yet.</p>}
                        <form className="comment-form" action={`/logs/${log._id}/comments`} method="POST">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="commentText">Comment:</label>
                            <textarea id="commentText" name="text" rows="4" required></textarea>
                            <button type="submit">Post Comment</button>
                        </form>
                    </div>
                </article>
            </DefaultLayout>
        );
    }
}

module.exports = Show;