import React, { useContext, useEffect, useMemo, useState } from 'react';
import Navbar from "../Navbar/Navbar";
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { AppContext } from '../Context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Blogs() {
    const [blogContent, setBlogContent] = useState('');
    const { blogs, setBlogs, userID } = useContext(AppContext);
    const [searchedItem, setSearchedItem] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        setLoading(true)
        try {
            const res = await axios.get('https://travelguide.runasp.net/api/Blogs')
            setBlogs(res.data['$values'])

        }
        catch (err) {
            console.log('error fetching data');

        }
        finally {
            setLoading(false)
        }
    };

    const handleBlogSubmit = async () => {
        if (blogContent.trim()) {
            try {
                const res = await axios.post(`https://travelguide.runasp.net/api/Blogs`, {
                    blog: blogContent,
                    userId: userID
                })
                if (res.status === 200 || res.status === 201) {
                    setBlogContent('')
                    fetchBlogs()
                }
            }
            catch (err) {
                console.log('error');

            }
        };
    }

    const memoizedBlogs = useMemo(() => {
        return blogs.map((blog) => (
            <Blog
                key={blog.id}
                id={blog.id}
                blog={blog.blog}
            />
        ));
    }, [blogs]);


    const displayedBlogs = useMemo(() => {
        return searchedItem
            ? blogs.filter((blog) =>
                blog.blog.toLowerCase().includes(searchedItem.toLowerCase())
            )
            : blogs;
    }, [searchedItem, blogs]);



    return (
        <>
            <Navbar />
            <div className='d-flex justify-content-start align-items-center flex-column' style={{ minHeight: '100vh', height: 'auto', marginTop: '10rem' }}>
                <h1 style={{ fontFamily: 'headers_font', fontSize: '4rem' }}>Welcome to Blogs Page</h1>
                <span className='lead' style={{ fontFamily: 'text_font', fontSize: '1.5rem' }}>You can search for any blog you want</span>
                <br />
                <div style={{ position: 'relative' }}>
                    <input
                        className="form-control mb-4 fs-3"
                        type="text"
                        placeholder="Search blogs..."
                        style={{ width: '30rem', padding: '1rem' }}
                        onChange={(e) => setSearchedItem(e.target.value)}
                    />
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className='fs-3'
                        style={{ position: 'absolute', right: '10px', top: '25%', cursor: 'pointer', color: '#000' }}

                    />
                </div>

                <div className='d-flex justify-content-center align-items-center mb-5 w-50'>
                    <div className="input-group">
                        <textarea
                            className="form-control fs-3"
                            placeholder="What's on your mind?"
                            value={blogContent}
                            onChange={(e) => setBlogContent(e.target.value)}
                            style={{ height: 'auto' }}
                        />
                        <button className="btn btn-success" onClick={handleBlogSubmit} style={{ padding: '1 rem' }}>Post</button>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center flex-wrap gap-5'>
                    {
                        loading ? (<h3> loading.. </h3>) :
                            searchedItem && displayedBlogs.length === 0 ? (
                                <h3>No blogs found</h3>
                            ) : (
                                displayedBlogs.map((blog) => (
                                    <Blog key={blog.id} blog={blog.blog} />
                                ))
                            )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blogs;