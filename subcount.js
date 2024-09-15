import { members } from './members.js';
const apiKey = 'AIzaSyD4oyL0_OJ3JPn4j63W9Zt6ekbMT3Z-FG8';
const s8ulChannelId = 'UCrK1EhsLO4LtXoTaYGgiWVA';

function formatToMillion(number) {
    const formattedNumber = (number / 1000000).toFixed(2);
    return `${formattedNumber}M`;
}

async function fetchSubscriberCount(channelId) {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`);
        const data = await response.json();
        return parseInt(data.items[0].statistics.subscriberCount);
    } catch (error) {
        console.log('Error fetching subscriber count:', error);
        return 0;
    }
}

async function fetchS8ULSubscriberCount() {
    const subscriberCount = await fetchSubscriberCount(s8ulChannelId);
    const formattedSubscriberCount = formatToMillion(subscriberCount);
    document.getElementById('subscribers').innerText = `${formattedSubscriberCount}`;
}

async function fetchTotalSubscribers() {
    let totalSubscribers = 0;
    const subscriberCount = await fetchSubscriberCount(s8ulChannelId);
    for (const member of members) {
        const count = await fetchSubscriberCount(member.channelId);
        totalSubscribers += count;
    }
    const formattedTotalSubscribers = formatToMillion(totalSubscribers + subscriberCount);
    document.getElementById('totalSubscribers').innerText = `${formattedTotalSubscribers}`;
}

fetchS8ULSubscriberCount();
fetchTotalSubscribers();