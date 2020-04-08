import React from 'react';
import Feed from './Feed';
import './FeedList.scss';

class FeedList extends React.Component {
    render() {
        return (
            <div id="feed-list">
                <input type="text" id="search-bar" placeholder="검색"></input>
                <div id="list">
                    <div className="row">
                        <Feed></Feed>
                        <Feed></Feed>
                        <Feed></Feed>
                    </div>

                    <div className="row">
                        <Feed></Feed>
                        <Feed></Feed>
                        <Feed></Feed>
                    </div>

                    <div className="row">
                        <Feed></Feed>
                        <Feed></Feed>
                        <Feed></Feed>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeedList;