pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          // build using the Dockerfile in the workspace root
          dockerImage = docker.build('binary-visualizer-image')
        }
      }
    }

    stage('Run Container') {
      steps {
        script {
          // stop any old container (optional cleanup)
          bat 'docker rm -f binary-visualizer-container || echo "no old container"'
          // then run the new one
          dockerImage.run('-d -p 8080:80 --name binary-visualizer-container')
        }
      }
    }
  }
}
