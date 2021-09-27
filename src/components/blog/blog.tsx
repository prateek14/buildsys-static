import React, { Fragment, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import { Dictionary } from '../../abstract/interfaces';
import { useTitle } from '../../utils/common';
import { NotFound } from '../404/404';
import { FullWidthPanel } from '../common/full-width-panel';
import { SinglePanel } from '../common/single-panel';
import './blog.scss';

import list from './list';

interface BlogPost {
    title: string;
    url: string;
    slug: string;
    description: string;
    date: string;
    img?: string;
    tags: string[];
}

export const Blog: React.FunctionComponent = (): JSX.Element => {
    useTitle('Blog');
    const items: BlogPost[] = list.blogs.sort((a, b) => {
        let bDate = new Date(b.date).valueOf();
        bDate = isNaN(bDate) ? 0 : bDate;
        let aDate = new Date(a.date).valueOf();
        aDate = isNaN(aDate) ? 0 : aDate;
        return bDate - aDate;
    });
    const tags = getTags(items);
    const [currentTag, setCurrentTag] = useState<string>('All');

    return (
        <Fragment>
            <FullWidthPanel className="flex-center" backgroundColor="#fefefe">
                <h1>Blog</h1>

                <div className="filter-tags">
                    {tags.map((tag, index) => (
                        <div
                            onClick={() => setCurrentTag(tag)}
                            className={currentTag === tag ? 'active' : ''}
                            key={index}>
                            {tag}
                        </div>
                    ))}
                </div>
                <PostList
                    isNews={false}
                    onTagChange={(tag) => setCurrentTag(tag)}
                    items={items.filter(
                        (i) => currentTag === 'All' || !!i.tags.find((t) => t === currentTag),
                    )}></PostList>
            </FullWidthPanel>
        </Fragment>
    );
};

export const PostList: React.FunctionComponent<{
    onTagChange: (tag: string) => void;
    items: BlogPost[];
    isNews: boolean;
}> = (props: { onTagChange: (tag: string) => void; items: BlogPost[]; isNews: boolean }): JSX.Element => {
    return (
        <SinglePanel className="blog-single-panel">
            {props.items.map((p, index) => (
                <PostListItem onTagChange={props.onTagChange} key={index} item={p} isNews={props.isNews}></PostListItem>
            ))}
        </SinglePanel>
    );
};

export const PostListItem: React.FunctionComponent<{
    onTagChange: (tag: string) => void;
    item: BlogPost;
    isNews: boolean;
}> = (props: { onTagChange: (tag: string) => void; item: BlogPost; isNews: boolean }): JSX.Element => {
    const item = props.item;
    const date = Date.parse(item.date);
    let dateStr = '';
    if (!isNaN(date)) {
        dateStr = new Date(date).toDateString();
    }
    const hasTags = item.tags && item.tags.length > 0;
    const prefix = props.isNews ? '/news/' : '/blog/';
    return (
        <div className="post-list-item flex-column">
            <Link to={prefix + item.slug}>
                <div className="flex-column">
                    {item.img && (
                        <div className="image">
                            <img src={item.img} />
                        </div>
                    )}
                    <div className="title">{item.title}</div>
                </div>
            </Link>
            {hasTags && (
                <div className="tags">
                    {item.tags.map((tag, index) => (
                        <div className="text-14" onClick={() => props.onTagChange(tag)} key={index}>
                            {tag}
                        </div>
                    ))}
                </div>
            )}
            {!isNaN(date) && <div className="date">Published {dateStr}</div>}
            <div className="byline">{item.description}</div>
        </div>
    );
};

export const BlogItem: React.FunctionComponent = (): JSX.Element => {
    const { id }: { id: string } = useParams();
    const item = list.blogs.find((item) => item.slug.toLowerCase() === id.toLowerCase());
    return <BlogOrNewsItem item={item} />;
};

export const PostItem: React.FunctionComponent<{ item: BlogPost }> = (props: { item: BlogPost }): JSX.Element => {
    useTitle(props.item.title);
    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        getBlogItem('/assets/blogs/' + props.item.url)
            .then((md) => {
                setMarkdown(md);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    const item = props.item;
    const date = Date.parse(item.date);
    let dateStr = '';
    if (!isNaN(date)) {
        dateStr = new Date(date).toDateString();
    }
    return (
        <div className="post-item">
            {item.img && (
                <div className="image">
                    <img src={item.img} />
                </div>
            )}
            <h1>{item.title}</h1>
            {!isNaN(date) && <div className="date">Published {dateStr}</div>}
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

const getBlogItem = async (url: string): Promise<string> => {
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'text/markdown',
                Accept: 'text/markdown',
            },
        });
        const dto = await response.text();
        return dto;
    } catch (e) {
        console.log(e);
        return '';
    }
};

const getTags = (items: BlogPost[]): string[] => {
    const t: Dictionary<number> = {};
    items.forEach((p) => {
        p.tags.forEach((tag) => {
            if (t[tag]) {
                t[tag]++;
            } else {
                t[tag] = 1;
            }
        });
    });
    return [
        'All',
        ...Object.keys(t)
            .sort((a, b) => t[b] - t[a])
            .slice(0, 5),
    ];
};

export const News: React.FunctionComponent = (): JSX.Element => {
    useTitle('Buildsys in News');
    const items: BlogPost[] = list.news.sort((a, b) => {
        let bDate = new Date(b.date).valueOf();
        bDate = isNaN(bDate) ? 0 : bDate;
        let aDate = new Date(a.date).valueOf();
        aDate = isNaN(aDate) ? 0 : aDate;
        return bDate - aDate;
    });
    const tags = getTags(items);
    const [currentTag, setCurrentTag] = useState<string>('All');

    return (
        <Fragment>
            <FullWidthPanel className="flex-center" backgroundColor="#fefefe">
                <h1>Buildsys in News</h1>

                <div className="filter-tags">
                    {tags.map((tag, index) => (
                        <div
                            onClick={() => setCurrentTag(tag)}
                            className={currentTag === tag ? 'active' : ''}
                            key={index}>
                            {tag}
                        </div>
                    ))}
                </div>
                <PostList
                    isNews={true}
                    onTagChange={(tag) => setCurrentTag(tag)}
                    items={items.filter(
                        (i) => currentTag === 'All' || !!i.tags.find((t) => t === currentTag),
                    )}></PostList>
            </FullWidthPanel>
        </Fragment>
    );
};

export const NewsItem: React.FunctionComponent = (): JSX.Element => {
    const { id }: { id: string } = useParams();
    const item: BlogPost | undefined = list?.news?.find((item) => item.slug.toLowerCase() === id.toLowerCase());

    return <BlogOrNewsItem item={item} />;
};

const BlogOrNewsItem: React.FunctionComponent<{ item: BlogPost | undefined }> = ({
    item,
}: {
    item: BlogPost | undefined;
}): JSX.Element => {
    if (!item) {
        return <NotFound></NotFound>;
    }
    return (
        <Fragment>
            {item && (
                <FullWidthPanel className="flex-center" backgroundColor="#fefefe">
                    <SinglePanel className="blog-single-panel">
                        <PostItem item={item}></PostItem>
                    </SinglePanel>
                </FullWidthPanel>
            )}
        </Fragment>
    );
};
