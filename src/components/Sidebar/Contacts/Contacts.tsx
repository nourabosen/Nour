import React from "react";

import { atob } from "abab";

import { Icon } from "@/components/Icon";
import { ICONS } from "@/constants";
import { useSiteMetadata } from "@/hooks";
import { getContactHref, getIcon } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faLetterboxd } from "@fortawesome/free-brands-svg-icons";

import * as styles from "./Contacts.module.scss";

const Contacts: React.FC = () => {
  const { author } = useSiteMetadata();
  const { contacts } = author;

  return (
    <div className={styles.contacts}>
      <ul className={styles.list}>
        {(Object.keys(contacts) as Array<keyof typeof ICONS>).map((name) =>
          contacts[name] ? (
          <li className={styles.item} key={name}>
            {name === "email" ? (
              <span
                className={styles.link}
                onClick={() => {
                  window.location.href =
                    "mailto:" + atob(getContactHref(name, contacts[name]));
                }}
              >
                <Icon name={name} icon={getIcon(name)} />
              </span>
            ) : (
              <a
                className={styles.link}
                href={getContactHref(name, contacts[name])}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={name} icon={getIcon(name)} />
              </a>
            )}
          </li>
        ) : null,
      )}
      <li className={styles.item} key="leetcode">
        <a
          className={styles.link}
          href="https://leetcode.com/u/NourAbosen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faCode} />
        </a>
      </li>
      <li className={styles.item} key="letterboxd">
        <a
          className={styles.link}
          href="https://letterboxd.com/NourAbosen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLetterboxd} />
        </a>
      </li>
    </ul>
  </div>
)};

export default Contacts;
