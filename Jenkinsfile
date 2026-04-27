pipeline {
    agent any
    environment {
        DOCKER_BIN = '/usr/local/bin/docker'
    }
    stages {
        stage('Clone') {
            steps { checkout scm }
        }
        stage('Build') {
            steps { sh 'npm install' }
        }
        stage('Test') {
            steps { sh 'echo "No tests implemented"' }
        }
        stage('Docker Build') {
            steps { sh "${DOCKER_BIN} build -t student-app ." }
        }
        stage('Run Container') {
            steps {
                sh "${DOCKER_BIN} stop student-app-container || true"
                sh "${DOCKER_BIN} rm student-app-container || true"
                sh "${DOCKER_BIN} run -d -p 3000:3000 --name student-app-container student-app"
            }
        }
    }
}
