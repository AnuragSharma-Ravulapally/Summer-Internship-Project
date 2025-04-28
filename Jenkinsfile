pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                // Clean workspace and clone the repo
                deleteDir()
                git 'https://github.com/AnuragSharma-Ravulapally/Summer-Internship-Project.git'
            }
        }
        stage('Clean Existing Containers') {
            steps {
                echo 'Cleaning existing containers...'
                // Force remove the container if it exists
                bat 'docker rm -f binary-visualizer-container || echo "Container not found - OK to proceed"'
                
                // Make sure any existing compose service is down
                bat 'docker-compose down || echo "No compose to stop"'
            }
        }
        stage('Deploy with Docker Compose') {
            steps {
                echo 'Deploying with Docker Compose...'
                // Build fresh
                bat 'docker-compose build --no-cache'
                
                // Start the services
                bat 'docker-compose up -d'
                
                echo 'Container deployed successfully. Access at http://localhost:9000'
            }
        }
        stage('Verify Deployment') {
            steps {
                echo 'Verifying deployment...'
                // Check if the container is running
                bat 'docker ps | findstr binary-visualizer-container'
            }
        }
    }
    post {
        success {
            echo '✅ Pipeline finished successfully!'
            echo 'Your application is now running at http://localhost:9000'
        }
        failure {
            echo '❌ Pipeline failed — check the Console Output above for errors.'
            bat 'docker-compose down || echo "No containers to clean up"'
        }
    }
}