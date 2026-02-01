// function processOrder(orderId) {
//     return fetch(`/api/orders/${orderId}`)
//         .then(response => response.json())
//         .then(order => {
//             return fetch(`/api/inventory/${order.productId}`);
//         })
//         .then(response => response.json())
//         .then(inventory => {
//             if (inventory.stock > 0) {
//                 return { success: true, message: 'Order processed' };
//             } else {
//                 return { success: false, message: 'Out of stock' };
//             }
//         });
// }


// async function processOrder(orderId) {
//     const responseOrder = await fetch(`/api/orders/${orderId}`);
//     const order = await response.json();

//     const responseinventory = await fetch(`/api/inventory/${order.productId}`);
//     const inventory = await response.json();

//     if (inventory.stock > 0) {
//         return { success: true, message: 'Order processed' };
//     } else {
//         throw { success: false, message: 'Out of stock' };
//     }
// }

// // exe1
// // Given Promise-based code:
// function getUserById(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('User not found');
//             }
//             return response.json();
//         })
//         .then(user => {
//             console.log(`Found user: ${user.name} (${user.email})`);
//             return user;
//         })
//         .catch(error => {
//             console.error('Error fetching user:', error.message);
//             return null;
//         });
// }

// async function getUserById(userId) {

//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         if (!response.ok) {
//             throw new Error('User not found');
//         }
//         const user = await response.json();
//         console.log(`Found user: ${user.name} (${user.email})`);
//         return user;
//     }
//     catch (error) {
//         console.error('Error fetching user:', error.message);
//         return null;

//     }
// }


// // exe2
// // Starter code structure:
// async function getUserWithPosts(userId) {
//     // Your implementation here

//     try {
//         const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         if (!responseUser.ok) {
//             throw new Error('User not found');
//         }

//         const responseUserJson = await responseUser.json();
//         const responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//         if (!responsePost.ok) {
//             throw new Error('Post not found');
//         }
//         const responsePostJson = await responsePost.json();
//         return { responseUserJson, responsePostJson };

//     } catch (error) {
//         console.error(error.message);
//         return null;

//     }
// }


// exe3
async function getUsersPostsComments() {
    const [users, posts, comments] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
        fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json()),
        fetch('https://jsonplaceholder.typicode.com/comments').then(r => r.json())]);

    return { users, posts, comments };



    const summary = {
        totalUsers: users.length,
        totalPosts: posts.length,
        totalComments: comments.length,
        avgPostsPerUser: totalPosts / totalUsers,
        avgCommentsPerPost: totalComments / totalPosts
    };


    const topUsers = users.map(user => {
        const userPosts = posts.filter(post => post.userId === user.id);
        const postIds = userPosts.map(post => post.id);
        const userComments = comments.filter(comment => postIds.includes(comment.postId));

        return {
            name: user.name,
            postCount: userPosts.length,
            commentCount: userComments.length
        };
    })
        .sort((a, b) => b.postCount - a.postCount)
        .slice(0, 3);


    const recentPosts = [...posts]
        .sort((a, b) => b.id - a.id)
        .slice(0, 5);

    return {
        summary,
        topUsers,
        recentPosts
    };
}



getUsersPostsComments();