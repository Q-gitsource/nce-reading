import Chart from 'https://cdn.jsdelivr.net/npm/chart.js@3.7.0/dist/chart.esm.js';

export function initProgressTracker() {
    let progressChart = null;
    const progressData = loadProgressFromStorage();
    
    createProgressChart(progressData);

    // 暴露更新进度的方法
    window.updateProgress = updateProgress;
}

function createProgressChart(data) {
    const ctx = document.getElementById('progressChart').getContext('2d');
    
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.dates,
            datasets: [{
                label: '朗读准确率',
                data: data.scores,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    return chart;
}

function loadProgressFromStorage() {
    const defaultData = {
        dates: [],
        scores: []
    };

    const stored = localStorage.getItem('readingProgress');
    return stored ? JSON.parse(stored) : defaultData;
}

function updateProgress(score) {
    const progressData = loadProgressFromStorage();
    const today = new Date().toLocaleDateString();

    progressData.dates.push(today);
    progressData.scores.push(score);

    // 只保留最近30天的数据
    if (progressData.dates.length > 30) {
        progressData.dates.shift();
        progressData.scores.shift();
    }

    localStorage.setItem('readingProgress', JSON.stringify(progressData));
    createProgressChart(progressData);
} 