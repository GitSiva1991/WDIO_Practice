pipeline {
  agent any

  stages {
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }
    stage('Run WDIO tests') {
      steps {
        bat 'npx wdio run wdio.conf.js'
      }
    }
  }
}
