import java.util.concurrent.*;
import java.util.*;

public class ExecutorServiceExample {

    // A simple Callable task that returns a message
    static class MyTask implements Callable<String> {
        private int taskId;

        MyTask(int taskId) {
            this.taskId = taskId;
        }

        @Override
        public String call() throws Exception {
            return "Task " + taskId + " executed by " + Thread.currentThread().getName();
        }
    }

    public static void main(String[] args) throws Exception {
        // Create a fixed thread pool with 3 threads
        ExecutorService executor = Executors.newFixedThreadPool(3);

        // Create a list to hold Future objects
        List<Future<String>> futures = new ArrayList<>();

        // Submit 5 Callable tasks
        for (int i = 1; i <= 5; i++) {
            futures.add(executor.submit(new MyTask(i)));
        }

        // Retrieve and print the results
        for (Future<String> future : futures) {
            System.out.println(future.get());
        }

        // Shutdown the executor
        executor.shutdown();
    }
}