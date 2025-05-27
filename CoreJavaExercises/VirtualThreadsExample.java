public class VirtualThreadsExample {
    public static void main(String[] args) {
        long start = System.currentTimeMillis();

        // Launch 100,000 virtual threads
        for (int i = 0; i < 100_000; i++) {
            Thread.startVirtualThread(() -> {
                System.out.println("Hello from virtual thread " + Thread.currentThread());
            });
        }

        long end = System.currentTimeMillis();
        System.out.println("Virtual threads launched in: " + (end - start) + " ms");
    }
}