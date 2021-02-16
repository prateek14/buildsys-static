import React, { Fragment, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import { useTitle } from '../../utils/common';
import { NotFound } from '../404/404';
import { FullWidthPanel } from '../common/full-width-panel';
import { SinglePanel } from '../common/single-panel';
import './blog.scss';

interface BlogPost {
    title: string;
    url: string;
    slug: string;
    description: string;
    date: string;
    img?: string;
}

export const Blog: React.FunctionComponent = (): JSX.Element => {
    useTitle('Blog');

    const [items, setItems] = useState<BlogPost[]>([]);

    useEffect(() => {
        getBlogs()
            .then((items) => {
                setItems(items);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    return (
        <Fragment>
            <FullWidthPanel className="flex-center" backgroundColor="#fefefe">
                <h1>Blog</h1>
                <PostList items={items}></PostList>
            </FullWidthPanel>
        </Fragment>
    );
};

export const PostList: React.FunctionComponent<{ items: BlogPost[] }> = (props: { items: BlogPost[] }): JSX.Element => {
    return (
        <SinglePanel width="640px" padding="0 64px">
            {props.items.map((p, index) => (
                <PostListItem key={index} item={p}></PostListItem>
            ))}
        </SinglePanel>
    );
};

export const PostListItem: React.FunctionComponent<{ item: BlogPost }> = (props: { item: BlogPost }): JSX.Element => {
    const item = props.item;
    const date = Date.parse(item.date);
    let dateStr = '';
    if (!isNaN(date)) {
        dateStr = new Date(date).toDateString();
    }
    return (
        <Link className="post-list-item" to={'/blog/' + item.slug}>
            <div className="flex-column">
                {item.img && (
                    <div className="image">
                        <img src={item.img} />
                    </div>
                )}
                <div className="title">{item.title}</div>
                {!isNaN(date) && <div className="date">Published {dateStr}</div>}
                <div className="byline">{item.description}</div>
            </div>
        </Link>
    );
};

export const BlogItem: React.FunctionComponent = (): JSX.Element => {
    const [item, setItem] = useState<BlogPost | undefined | null>(undefined);
    const { id }: { id: string } = useParams();
    useEffect(() => {
        getBlogs()
            .then((items) => {
                const found = items.find((item) => item.slug.toLowerCase() === id.toLowerCase());
                if (found) {
                    setItem(found);
                } else {
                    setItem(null);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);
    if (item === null) {
        return <NotFound></NotFound>;
    }
    return (
        <Fragment>
            {item && (
                <FullWidthPanel className="flex-center" backgroundColor="#fefefe">
                    <SinglePanel width="640px" padding="0 64px">
                        <PostItem item={item}></PostItem>
                    </SinglePanel>
                </FullWidthPanel>
            )}
        </Fragment>
    );
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
            <h1>{item.title}</h1>
            {!isNaN(date) && <div className="date">Published {dateStr}</div>}
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

const getBlogs = async (): Promise<BlogPost[]> => {
    try {
        const response = await fetch('/assets/blogs/list.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
        const dto = await response.json();
        return dto.all;
    } catch (e) {
        console.log(e);
        return [];
    }
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
