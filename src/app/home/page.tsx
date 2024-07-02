// 'use client';

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { State } from "../../app/_interface/state";
// import Spiner from ".././_mediaSpinner/Spiner";
// import SinglePost from ".././_comonents/singlepost/singlepost";
// import { Grid, Box, styled } from "@mui/material";
// import Getuserdata from ".././_comonents/getuserdata";
// import { getAllPosts } from "../lib/postsSlice";

// const HomeContainer = styled(Grid)(({ theme }) => ({
//     marginTop: theme.spacing(4),
//     padding: theme.spacing(2),
//     justifyContent: "center",
// }));

// const PostsContainer = styled(Grid)(({ theme }) => ({
//     marginTop: theme.spacing(4),
// }));

// export default function Home() {
//     const dispatch = useDispatch();
//     const { allPosts, isLoading } = useSelector((state: State) => state.posts);
//     const [currentUser, setCurrentUser] = useState(null);

//     const handleUserDataFetched = (data) => {
//         setCurrentUser(data);
//         // console.log('Fetched user data:', data);
//     };

//     useEffect(() => {
//         dispatch(getAllPosts());
//     }, [dispatch]);

//     return (
//         <>
//             <Getuserdata onDataFetched={handleUserDataFetched} />

//             <HomeContainer container spacing={1} alignItems="center" justifyContent="center" style={{ minHeight: "100vh" }}>
//                 {isLoading ? (<>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>

//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>


//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>


//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>


//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={4} lg={3}>
//                         <Spiner loading />
//                     </Grid>

//                 </>
//                 ) : (
//                     allPosts?.map((post) => (
//                         <Grid key={post?._id} item xs={12} sm={6} md={4} lg={3}>
//                             <div style={{ padding: "0.5rem" }}>
//                                 <SinglePost postdetails={post} currentUser={currentUser} />
//                             </div>
//                         </Grid>
//                     ))
//                 )}
//             </HomeContainer>
//         </>
//     );
// }



'use client';

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../app/_interface/state";
import Spiner from ".././_mediaSpinner/Spiner";  // Ensure the correct path
import SinglePost from ".././_comonents/singlepost/singlepost";
import { Grid, Box, styled } from "@mui/material";
import Getuserdata from ".././_comonents/getuserdata";
import { getAllPosts } from "../lib/postsSlice";

const HomeContainer = styled(Grid)(({ theme }) => ({
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    justifyContent: "center",
}));

const PostsWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: theme.spacing(2),
    '& > div': {
        width: '90%',
        transition: 'transform 0.3s ease-in-out',
    },
}));

export default function Home() {
    const dispatch = useDispatch();
    const { allPosts, isLoading } = useSelector((state: State) => state.posts);
    const [currentUser, setCurrentUser] = useState(null);

    const handleUserDataFetched = (data) => {
        setCurrentUser(data);
        console.log('Fetched user data:', data);
    };

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    return (
        <>
            <Getuserdata onDataFetched={handleUserDataFetched} />
            {/* <HomeContainer container spacing={1} alignItems="center" justifyContent="center" style={{ minHeight: "100vh" }}>
                {isLoading ? (<>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                </>


                ) : (
                    <Grid sx={{display:"flex"}} >
                        {allPosts?.map((post) => (
                            <Grid key={post?._id} item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ padding: "0.5rem" }}>
                                    <SinglePost postdetails={post} currentUser={currentUser} />
                                </div>
                            </Grid>
                            // <div key={post?._id}>
                            //     <div style={{ padding: "0.5rem" }}>
                            //         <SinglePost postdetails={post} currentUser={currentUser} />
                            //     </div>
                            //  </div>

                        ))}
                            </Grid>
                )}
            </HomeContainer> */}

<HomeContainer container spacing={1} alignItems="center" justifyContent="center" style={{ minHeight: "100vh" }}>
                {isLoading ? (<>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>


                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>


                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>


                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Spiner loading />
                    </Grid>

                </>
                ) : (
                    allPosts?.map((post) => (
                        <Grid key={post?._id} item xs={12} sm={6} md={4} lg={3}>
                            <div style={{ padding: "0.5rem" }}>
                                <SinglePost postdetails={post} currentUser={currentUser} />
                            </div>
                        </Grid>
                    ))
                )}
            </HomeContainer>
            
        </>
    );
}