export default function StatusBadge({ status }) {
    const colors = {
        padding: '#f59e0b',
        applied: '#10b981',
        rejected: '#ef4444',
        interview: '#3b82f6'
    };

    const style = {
        backgroundColor: colors[status.toLowerCase()] || '#94a3b8',
        color: 'white',
        padding: '0.25rem 0.5rem',
        borderRadius: '9999px',
        fontSize: '0.75rem',
        fontWeight: '600',
        textTransform: 'capitalize'
    };

    return <span style={style}>{status}</span>;
}
