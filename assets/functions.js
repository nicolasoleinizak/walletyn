export function localDateString(timestamp){
    return new Date(timestamp).toLocaleDateString(undefined, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })
}

export function timestamp(dateString){
    return new Date(dateString).getTime();
}