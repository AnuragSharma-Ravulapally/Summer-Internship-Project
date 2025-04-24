pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/AnuragSharma-Ravulapally/Summer-Internship-Project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("binary-visualizer-image")
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    dockerImage.run("-d -p 8080:80 --name binary-visualizer-container")
                }
            }
        }
    }
}
