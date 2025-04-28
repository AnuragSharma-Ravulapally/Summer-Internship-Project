pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/AnuragSharma-Ravulapally/Summer-Internship-Project.git'
            }
        }

        stage('Build Images') {
            steps {
                bat 'docker-compose build'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker-compose up -d'
            }
        }

        stage('Test Containers') {
            steps {
                bat 'docker ps'
            }
        }
    }
}