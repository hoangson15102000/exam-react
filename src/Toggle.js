import { useState } from 'react';
import { useEffect } from 'react'

/// useEffect 
/// 1.useEffect(callback)
// Gọi callback mỗi khi component được re-render 
/// 2.useEffect(callback,[])
// chỉ gọi callback 1 lần sau khi component mount 
/// 3.useEffect(callback,[deps])
// là biến chứa giá trị dữ liệu
// Callback sẽ được gọi lại mỗi khi dependence thay đổi 
// 


// -------
// 1. Callback luôn được gọi lại sau khi component mounted
// 2. chạy callback sau khi return tạo ra DOM
// 3. Clean up function luôn được gọi trước khi component unmount

const tabs = ['posts', 'comments', 'albums'];
function Toggle() {
    // title = title web
    const [title, setTitle] = useState('');
    // post

    const [posts, setPost] = useState([]);
    // type
    const [type, setType] = useState('posts');
    /// scroll to top

    const [showGoToTop, setshowGoToTop] = useState(false)
    // console.log(type);

    // resize 
    const [width, setWidth] = useState(window.innerWidth);

    // listen dom event 
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);

        // clean up function
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    })





    useEffect(() => {
        document.title = title;
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => { setPost(posts) })
    }, [type])



    /// DOM event
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setshowGoToTop(true)
            }
            else {
                setshowGoToTop(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        // console.log('ADDEventListener');


        // Cleanup function để remove 1 listener khi component đã bị unmount đi
        // nếu không clean đi thì sẽ bị memory leak bộ nhớ
        // warning

        return () => {
            window.removeEventListener('scroll', handleScroll);
            // console.log('RemoveEventListener');
        }
    }, [])


    function handleReturnScroll() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",

        })
        setshowGoToTop(false);
    }
    return (
        <div>
            <h1 value={width}>Width hien tai {width}</h1>
            {tabs.map((tab) => (
                <button
                    style={type === tab ? { color: '#fff', backgroundColor: '#333' } : {}}
                    onClick={() => { setType(tab) }}
                    key={tab}>{tab}</button>
            ))}

            <input value={title} onChange={e => setTitle(e.target.value)}></input>

            <ul>{posts.map((post) => (<li key={post.id}>{post.title || post.name}</li>))}</ul>
            {
                showGoToTop && (<button onClick={handleReturnScroll} style={{
                    position: 'fixed', right: 20, bottom: 20, height: 30,
                    width: 80, borderRadius: 5,
                    border: '1px solid red', background: 'red', fontWeight: 700, color: 'white'
                }}>Go to top</button>)
            }
        </div>

    )
}
export default Toggle;


// Listen DOM events
