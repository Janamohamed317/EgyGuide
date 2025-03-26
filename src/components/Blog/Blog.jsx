import React from 'react';

function Blog({ blog }) {
    const maxLength = 450;

    const truncatedText = blog.length > maxLength 
        ? blog.substring(0, maxLength) + "..." 
        : blog;

    return (
        <div className="card rounded-4" style={{ width: '35rem', height: '40rem', backgroundColor:'rgb(106, 69, 0)' , color:'white' }}>
            <div className="card-body ">
                <h5 className="card-title fs-3">Username</h5>
                <hr/>
                <p className="card-text fs-3">{truncatedText}</p>
            </div>
        </div>
    );
}

export default Blog;
