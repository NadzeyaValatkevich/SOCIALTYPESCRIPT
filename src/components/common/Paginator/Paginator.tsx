import React from 'react'
import styles from "./Paginator.module.css";

type PaginatorPropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
};

export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}: PaginatorPropsType) => {

    let pagesCount: number = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return (
        <div>
            {pages.map((p, index) => {
                return <span className={currentPage === p ? styles.selectedPage : undefined}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }} key={index}>{p}</span>
            })}
        </div>
    )};