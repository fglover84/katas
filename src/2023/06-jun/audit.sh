#!/usr/bin/env bash
set -e

if [[ -z $1 ]]; then
    echo "Please supply a PID to audit" && exit 1
fi

REPORT_DIR="output"
TMP_DIR="tmp"
FEED_NAME="${1}.rss"
FEED_FILE="${TMP_DIR}/${1}.rss"
REPORT_FILE="${REPORT_DIR}/${1}.report.txt"

mkdir -p $TMP_DIR $REPORT_DIR
touch $REPORT_FILE

append_to_report () {
    echo ${1} | tee -a $REPORT_FILE
}

is_first_tag_xml () {
    return $(grep -q "^<?xml" ${FEED_FILE})
}

is_last_tag_rss () {
    return $(grep -q "</rss>$" ${FEED_FILE})
}

main () {
    curl -s "https://podcasts.files.bbci.co.uk/${FEED_NAME}" -o ${FEED_FILE}

    if [[ $XML_PRESENT -eq 0 ]]; then 
        append_to_report "Valid XML & RSS: True"
    else
        append_to_report "Valid XML & RSS: False"
    fi


}

main
